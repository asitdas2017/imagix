import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FirebaseUploadService } from '../../services/firebase.upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [FirebaseUploadService]
})
export class UploadComponent implements OnInit {

  private displayDetailsComponent: boolean;
  private progressBarDisplay: boolean;
  private basePath: string;
  private sendUploadedInfo: any;
  private progressPercentage: any;

  constructor(private _firebaseUploadService: FirebaseUploadService,  private _router: Router) {
    this.basePath = 'imageuploads';
  }

  ngOnInit() {
    this.displayDetailsComponent = false;
    this.progressBarDisplay = false;
  }

  onUploadImage() {
    const storageRef: firebase.storage.Reference = firebase.storage().ref();
    const randomNumber = Math.floor(Date.now() / 1000);
    const selectedFile = (<HTMLInputElement>document.getElementById('uploadImage')).files[0];
    const fileExt = `${selectedFile.name}`.substring(`${selectedFile.name}`.lastIndexOf('.') + 1);
    const imageRef = `/${this.basePath}/${randomNumber}.${fileExt}`;
    const iRef = storageRef.child(imageRef).put(selectedFile);

    iRef.on('state_changed', (snapshot) => {
      this.progressBarDisplay = true;
        // upload in progress
        this.progressPercentage = Math.round((iRef.snapshot.bytesTransferred / iRef.snapshot.totalBytes) * 100);
        // console.log('Upload is ' + this.progressPercentage + '% done');
      }, (error) => {
        // upload failed
        console.log(error);
      }, () => {
        // upload success
        console.log('Success');
      }
    );
    iRef.then((snapshot) => {
      // console.log('COmpleted');
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        // console.log(snapshot);
        this.displayDetailsComponent = true;
        this.sendUploadedInfo = {
          downloadURL: downloadURL,
          storageSize: snapshot.metadata.size,
          storagePath: snapshot.metadata.fullPath,
          storageName: snapshot.metadata.name
        };
        this.progressBarDisplay = false;
      });
    });
  }

  getModalInfo(event) {
    this.displayDetailsComponent = event;
  }

}
