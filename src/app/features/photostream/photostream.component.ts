import { Component, OnInit } from '@angular/core';
import { FirebaseUploadService } from '../../services/firebase.upload.service';

@Component({
  selector: 'app-photostream',
  templateUrl: './photostream.component.html',
  styleUrls: ['./photostream.component.css'],
  providers: [FirebaseUploadService]
})
export class PhotostreamComponent implements OnInit {

  images: any[];
  constructor(private _firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {
    this._firebaseUploadService.getAllImages().valueChanges().subscribe(data => {
      this.images = data;
    });
  }

}
