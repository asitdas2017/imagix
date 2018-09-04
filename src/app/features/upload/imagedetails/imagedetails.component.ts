import { Component, OnInit, Input } from '@angular/core';
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

  @Input() downloadedURL: any;
  private imageName: string;
  private imageLocation: string;
  private imageComment: string;

  ngOnInit() {

  }

  onPhotoSubmit() {
    console.log('asit');
    const imageDetails = {
      imageName: this.imageName,
      imageLocation: this.imageLocation,
      imageComment: this.imageComment,
      // imageURL: this.imageURL
    };
    console.log(imageDetails);
    // this._router.navigate(['about']);

    // this._firebaseUploadService.uploadPhoto(imageDetails);
  }
}
