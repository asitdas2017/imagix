import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseUploadService {

    private basePath: string;
    constructor( private _db: AngularFireDatabase, private _router: Router ) {
        this.basePath = 'uploads';
    }

    uploadPhoto(imageDetailsObject: any) {
        const storageRef: firebase.storage.Reference = firebase.storage().ref();
        const _db = this._db;
        const that = this;
        for (const selectedFile of [imageDetailsObject.selectedImage]) {
            const imagePath = `/${this.basePath}/${selectedFile.name}`;
            const iRef = storageRef.child(imagePath);
            iRef.put(selectedFile).then((snapshot) => {
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    imageDetailsObject.imageURL = downloadURL;
                    imageDetailsObject.imageName = selectedFile.name;
                    return _db.list('/fileprofile').push(imageDetailsObject).then(() => {
                        console.log(downloadURL);
                        that._router.navigate(['uploaddetails']);
                    });
                });
            });
        }
    }



    uploadPhoto1() {
        const storageRef: firebase.storage.Reference = firebase.storage().ref();
        const randomNumber = Math.floor(Date.now() / 1000);
        const selectedFile = (<HTMLInputElement>document.getElementById('uploadImage')).files[0];
        const fileExt = `${selectedFile.name}`.substring(`${selectedFile.name}`.lastIndexOf('.') + 1);
        const imageRef = `/${this.basePath}/${randomNumber}.${fileExt}`;
        const iRef = storageRef.child(imageRef);
        iRef.put(selectedFile).then((snapshot) => {

            // this.details = 'snapshot';
            // return snapshot.metadata.fullPath;
             // console.log(filename);
        });

        
    }
}
