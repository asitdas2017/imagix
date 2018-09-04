import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseUploadService } from '../../services/firebase.upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [FirebaseUploadService]
})
export class UploadComponent implements OnInit {

  private displayDetailsComponent: boolean;
  private basePath: string;
  private imageURL: string;

  constructor(private _firebaseUploadService: FirebaseUploadService) {
    this.basePath = 'imageuploads';
  }

  ngOnInit() {
    this.displayDetailsComponent = false;
  }

  onUploadImage() {
    const storageRef: firebase.storage.Reference = firebase.storage().ref();
    const randomNumber = Math.floor(Date.now() / 1000);
    const selectedFile = (<HTMLInputElement>document.getElementById('uploadImage')).files[0];
    const fileExt = `${selectedFile.name}`.substring(`${selectedFile.name}`.lastIndexOf('.') + 1);
    const imageRef = `/${this.basePath}/${randomNumber}.${fileExt}`;
    const iRef = storageRef.child(imageRef);
    iRef.put(selectedFile).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(downloadURL);
        this.displayDetailsComponent = true;
        this.imageURL = downloadURL;
      });
    });
  }
}
