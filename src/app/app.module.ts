import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/Scores.component';
import { PlayersComponent } from './players/players.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

import { NgbAuthFirebaseUIModule } from '@firebaseui/ng-bootstrap';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PlayersComponent,
    PlayerAddComponent,
    PlayerEditComponent,
    DashboardComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTemplateModule,
    RouterModule.forRoot([
      { path: 'scores', component: ScoresComponent },
      { path: 'test', component: PlayerEditComponent },
      { path: 'players', component: PlayersComponent },
    ]),
    NgbAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyBdDGhasKTCRmyGJe79iY-V5ZH-cnL-kBg",
      authDomain: "golf-matcher-cf449.firebaseapp.com",
      databaseURL: "https://golf-matcher-cf449.firebaseio.com",
      projectId: "golf-matcher-cf449",
      storageBucket: "",
      messagingSenderId: "935607959094",
      appId: "1:935607959094:web:d1d9ecda2c6d4e7489e297"
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
