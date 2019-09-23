import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbAuthFirebaseUIModule } from '@firebaseui/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyBdDGhasKTCRmyGJe79iY-V5ZH-cnL-kBg",
      authDomain: "golf-matcher-cf449.firebaseapp.com",
      databaseURL: "https://golf-matcher-cf449.firebaseio.com",
      projectId: "golf-matcher-cf449",
      storageBucket: "",
      messagingSenderId: "935607959094",
      appId: "1:935607959094:web:d1d9ecda2c6d4e7489e297"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
