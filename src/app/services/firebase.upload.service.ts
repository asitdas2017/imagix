import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseUploadService {

    private basePath: string;
    private allImages: AngularFireList<any[]>;
    private allAlbumImages: AngularFireList<any[]>;
    private particularImage: AngularFireObject<any>;
    constructor( private _db: AngularFireDatabase, private _router: Router ) {
        this.basePath = 'uploads';
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
        this.allImages = this._db.list('/uploaded') as AngularFireList<any[]>;
        return this.allImages;
    }
    getAlbumImages() {
        // this.allAlbumImages = this._db.list('/uploaded', ref => ref.orderByChild('imageName').equalTo('Asit')) as AngularFireList<any[]>;
        this.allAlbumImages = this._db.list('/uploaded') as AngularFireList<any[]>;
        return this.allAlbumImages;
    }
    getParticularImageDetail(id) {
        this.particularImage = this._db.object('/uploaded/' + id) as AngularFireObject<any[]>;
        return this.particularImage;
    };
}
