import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseAuthService } from '../services/firebase.auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [FirebaseAuthService]
})
export class HeaderComponent implements OnInit {

  private userPhoto: any;

  constructor(private _firebaseAuthService: FirebaseAuthService) {
    firebase.auth().onAuthStateChanged(user => {
      if (user == null) {
        console.log('logout');
      } else {
        this.userPhoto = user.photoURL;
        // console.log('image : ' + this.userPhoto);
      }
    });
  }
  ngOnInit() {
  }

  onLogin() {
    this._firebaseAuthService.loginWithGoogle()/* .then(
      firebase.auth().onAuthStateChanged(user => {
        if (user == null) {
          console.log('logout');
        } else {
          console.log(user.photoURL);
          this.userPhoto = user.photoURL;
        }
      })
    ) */;
  }
  onLogout() {
    this._firebaseAuthService.logoutFromGoogle();
  }

}
