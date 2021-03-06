import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseUploadService } from '../../../services/firebase.upload.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css'],
  providers: [FirebaseUploadService]
})
export class ImagedetailsComponent implements OnInit {

  constructor( private _firebaseUploadService: FirebaseUploadService, private _router: Router) { }

  @Input() receiveUploadedInfo: any;
  private imageName: string;
  private imageType: string;
  private imageLocation: string;
  private imageComment: string;
  @Output() closeModalInfo: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
  }

  onPhotoSubmit() {
    const imageDetails = {
      imageName: this.imageName,
      imageType: this.imageType,
      imageLocation: this.imageLocation,
      imageComment: this.imageComment,
      imageDownloadURL: this.receiveUploadedInfo.downloadURL,
      imageStorageBytes: this.receiveUploadedInfo.storageSize,
      imageStoragePath: this.receiveUploadedInfo.storagePath,
      imageStorageName: this.receiveUploadedInfo.storageName
    };

    this._firebaseUploadService.addPhoto(imageDetails).then(() => {
      this._router.navigate(['photostream']);
    });
  }

  closeModal() {
    const storageRef: firebase.storage.Reference = firebase.storage().ref();
    storageRef.child(this.receiveUploadedInfo.storagePath).delete();
    this.closeModalInfo.emit(false);
  }
}
