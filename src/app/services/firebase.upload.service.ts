import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseUploadService {

    private basePath: string;
    constructor( private _db: AngularFireDatabase ) {
        this.basePath = 'uploads';
    }
    
    uploadPhoto(imageObject: any) {
        const storageRef: firebase.storage.Reference = firebase.storage().ref();
        let _db = this._db;
        for(let selectedFile of [imageObject]){
            let imagePath = `/${this.basePath}/${selectedFile.name}`;
            let iRef = storageRef.child(imagePath);
            iRef.put(selectedFile).then((snapshot) => {
                snapshot.ref.getDownloadURL().then(function(downloadURL) {   
                    //console.log(downloadURL);
                    return _db.list('/fileprofile').push({
                        imgURL: downloadURL
                    });
                });
            )}
        }         
    };
    
}