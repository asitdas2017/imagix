import { Imagesinterface } from './../../interfaces/Imagesinterface';
import { Component, OnInit } from '@angular/core';
import { FirebaseUploadService } from '../../services/firebase.upload.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-photostream',
  templateUrl: './photostream.component.html',
  styleUrls: ['./photostream.component.css'],
  providers: [FirebaseUploadService]
})
export class PhotostreamComponent implements OnInit {

  private loadingSpinner: Boolean = true;
  imagesTrack:  any[];
  images: any[] = [];
  constructor(private _firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {
    this._firebaseUploadService.getAllImages().snapshotChanges().subscribe(data => {
      this.loadingSpinner = false;
      data.map(subscribedData => {
        const newPair = {...subscribedData.payload.val(), key: subscribedData.payload.key};
        this.images.push(newPair);
      });
    });
  }

}
