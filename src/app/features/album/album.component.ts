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
  allAnbumImagesFintered: any;
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
    this.allAnbumImagesFintered = _.filter(this.allAlbumImages, _.conforms(this.filters));
    console.log(this.allAnbumImagesFintered);
    this.getIntoTheAlbum = true;
    this.onlyDisplaAlbumThumb = false;
  }
  onClickAlbum(id) {
    this.albumName = id;
    switch (id) {
      case 'portrait': {
        this.filters['imageName'] = val => val === 'Asit';
        this.applyFilters();
         break;
      }
      case 'landscape': {
        this.filters['imageName'] = val => val === 'Chsdafdf';
        this.applyFilters();
         break;
      }
      case 'common': {
        this.filters['imageName'] = val => val === 'Test';
        this.applyFilters();
         break;
      }
      case 'others': {
        this.filters['imageName'] = val => val === 'sdfsdf';
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

