import { Component, OnInit } from '@angular/core';
import { FirebaseUploadService } from '../../services/firebase.upload.service';

@Component({
  selector: 'app-photostream',
  templateUrl: './photostream.component.html',
  styleUrls: ['./photostream.component.css'],
  providers: [FirebaseUploadService]
})
export class PhotostreamComponent implements OnInit {

  loadingSpinner: Boolean = true;
  photostreamDetailsModel: Boolean = false;
  photostreamDetailsItem: any;
  imagesLargeDetails:  any[];
  images: any[] = [];
  constructor(private _firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {
    this._firebaseUploadService.getAllImages().snapshotChanges().subscribe(data => {
      this.loadingSpinner = false;
      data.map(subscribedData => {
        const newPair = {...subscribedData.payload.val(), 'key': subscribedData.payload.key};
        this.images.push(newPair);
      });
    });
  }

  openModal(id) {
    this.photostreamDetailsModel = true;
    this.photostreamDetailsItem = id;
  }
  getChildInfo(event) {
    console.log(event);
    this.photostreamDetailsModel = event;
  }

}
