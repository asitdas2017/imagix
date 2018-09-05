import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseUploadService {

    private basePath: string;
    private allImages: AngularFireList<any[]>;
    constructor( private _db: AngularFireDatabase, private _router: Router ) {
        this.basePath = 'uploads';
        this.allImages = this._db.list('/uploaded') as AngularFireList<any[]>;
    }

    /*
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
    */

    addPhoto(data) {
        return this._db.list('/uploaded').push(data);
    }

    getAllImages() {
        return this.allImages;
    }
}
