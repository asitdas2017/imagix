import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseUploadService } from '../../../services/firebase.upload.service';

@Component({
  selector: 'app-photostreamdetails',
  templateUrl: './photostreamdetails.component.html',
  styleUrls: ['./photostreamdetails.component.css']
})
export class PhotostreamdetailsComponent implements OnInit {

  @Input() receiveIdInfo: any;
  imageComment: any;
  imageDownloadURL: string;
  imageLocation: string;
  imageName: string;
  imageStorageBytes: number;

  @Output() childInfo: EventEmitter<boolean> = new EventEmitter();

  constructor(private _firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {
    this._firebaseUploadService.getParticularImageDetail(this.receiveIdInfo).valueChanges().subscribe(data => {
      this.imageComment = data.imageComment;
      this.imageDownloadURL = data.imageDownloadURL;
      this.imageLocation = data.imageLocation;
      this.imageName = data.imageName;
      this.imageStorageBytes = data.imageStorageBytes;
    });
  }

  closeModal() {
    this.childInfo.emit(false);
  }

}
