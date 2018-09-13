import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  private user: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth) {
    this.user = _afAuth.authState;
  }

  loginWithGoogle() {
    return this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logoutFromGoogle() {
    return this._afAuth.auth.signOut();
  }
}
