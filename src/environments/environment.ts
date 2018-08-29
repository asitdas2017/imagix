// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: "AIzaSyAV38y_JMgPYFT2Y8VShC0WmvQwqReXVAY",
    authDomain: "imagix-61bd3.firebaseapp.com",
    databaseURL: "https://imagix-61bd3.firebaseio.com",
    projectId: "imagix-61bd3",
    storageBucket: "imagix-61bd3.appspot.com",
    messagingSenderId: "192317386550"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
