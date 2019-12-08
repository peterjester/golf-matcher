// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBdDGhasKTCRmyGJe79iY-V5ZH-cnL-kBg",
    authDomain: "golf-matcher-cf449.firebaseapp.com",
    databaseURL: "https://golf-matcher-cf449.firebaseio.com",
    projectId: "golf-matcher-cf449",
    storageBucket: "golf-matcher-cf449.appspot.com",
    messagingSenderId: "935607959094",
    appId: "1:935607959094:web:d1d9ecda2c6d4e7489e297",
    authGuardFallbackURL: 'dashboard',
    authGuardLoggedInURL: 'dashboard',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
