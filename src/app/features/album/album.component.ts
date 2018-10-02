import { Component, OnInit } from '@angular/core';
import { FirebaseUploadService } from '../../services/firebase.upload.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [FirebaseUploadService]
})
export class AlbumComponent implements OnInit {

  private albumName: any;
  private getIntoTheAlbum: Boolean = false;
  private onlyDisplaAlbumThumb: Boolean = true;
  albumList = ['portrait', 'landscape', 'common', 'others'];
  allAlbumImages: any[] = [];
  allAnbumImagesFiltered: any;
  /// Active filter rules
  filters = {};

  constructor(private _firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {
    this._firebaseUploadService.getAllImages().snapshotChanges().subscribe(data => {
      data.map(subscribedData => {
        const newPair = {...subscribedData.payload.val(), 'key': subscribedData.payload.key};
        this.allAlbumImages.push(newPair);
        console.log(this.allAlbumImages);
      });
    });
  }

  applyFilters() {
    this.allAnbumImagesFiltered = _.filter(this.allAlbumImages, _.conforms(this.filters));
    console.log(this.allAnbumImagesFiltered);
    this.getIntoTheAlbum = true;
    this.onlyDisplaAlbumThumb = false;
  }
  onClickAlbum(id) {
    this.albumName = id;
    switch (id) {
      case 'portrait': {
        this.filters['imageType'] = val => val === 'portrait';
        this.applyFilters();
        break;
      }
      case 'landscape': {
        this.filters['imageType'] = val => val === 'landscape';
        this.applyFilters();
        break;
      }
      case 'common': {
        this.filters['imageType'] = val => val === 'common';
        this.applyFilters();
        break;
      }
      case 'others': {
        this.filters['imageType'] = val => val === 'others';
        this.applyFilters();
        break;
      }
   }
  }
  backToAlbum() {
    this.albumName = '';
    this.onlyDisplaAlbumThumb = true;
    this.getIntoTheAlbum = false;
  }
}

