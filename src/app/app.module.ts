import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { ScoresEditComponent } from './scores-edit/scores-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

import { AuthenticationComponent } from './authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';

import { TeamsComponent } from './teams/teams.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamAddComponent } from './team-add/team-add.component';
import { AngularFireModule } from '@angular/fire';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { DemoMaterialModule } from './leaderboard/mat-material';
import { HandicapComponent } from './handicap/handicap.component';

import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { PointsComponent } from './points/points.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PlayersComponent,
    PlayerAddComponent,
    PlayerEditComponent,
    ScoresEditComponent,
    DashboardComponent,
    TeamsComponent,
    SidebarComponent,
    TeamsComponent,
    TeamAddComponent,
    TeamEditComponent,
    LeaderboardComponent,
    HandicapComponent,
    ScheduleComponent,
    PointsComponent,
    MatchComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTemplateModule,
    RouterModule.forRoot([
      { path: 'test', component: PlayerEditComponent },
      { path: 'players', component: PlayersComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    AngularFireModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SidebarModule,
    ScrollingModule,
    DemoMaterialModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
