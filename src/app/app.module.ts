import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarModule } from 'ng-sidebar';

import { AuthenticationComponent } from './authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { TeamsComponent } from './teams/teams.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PlayersComponent,
    PlayerAddComponent,
    PlayerEditComponent,
    DashboardComponent,
    TeamsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyBdDGhasKTCRmyGJe79iY-V5ZH-cnL-kBg",
      authDomain: "golf-matcher-cf449.firebaseapp.com",
      databaseURL: "https://golf-matcher-cf449.firebaseio.com",
      projectId: "golf-matcher-cf449",
      storageBucket: "",
      messagingSenderId: "935607959094",
      appId: "1:935607959094:web:d1d9ecda2c6d4e7489e297"
    }),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
