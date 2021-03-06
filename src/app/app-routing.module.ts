import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlayerEditComponent }  from './player-edit/player-edit.component';
import { ScoresEditComponent } from './scores-edit/scores-edit.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamAddComponent } from './team-add/team-add.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HandicapComponent } from './handicap/handicap.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PointsComponent } from './points/points.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: '',  component: AuthenticationComponent },
  { path: 'editplayer', component: PlayerEditComponent },
  { path: 'editscores', component: ScoresEditComponent },
  { path: 'addplayer', component: PlayerAddComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'addteam', component: TeamAddComponent},
  { path: 'editteam', component: TeamEditComponent},
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'handicaps', component: HandicapComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'points', component: PointsComponent },
  { path: 'match', component: MatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}