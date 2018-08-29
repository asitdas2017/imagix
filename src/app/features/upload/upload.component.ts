import { Component } from '@angular/core';
import { FirebaseUploadService } from '../../services/firebase.upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [FirebaseUploadService]
})
export class UploadComponent implements OnInit {
  constructor(private _firebaseUploadService: FirebaseUploadService) {}

  selectedImage: any;
  
  onPhotoSubmit(event: any){
    const selectedImage: File = event.target.files[0];
    this._firebaseUploadService.uploadPhoto(selectedImage);
    getImageUrl();
  }


}
