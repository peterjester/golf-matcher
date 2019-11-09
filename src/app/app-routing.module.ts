import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlayerEditComponent }  from './player-edit/player-edit.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamAddComponent } from './team-add/team-add.component';
import { ScoresComponent } from './scores/scores.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: '',  component: AuthenticationComponent },
  { path: 'editplayer', component: PlayerEditComponent },
  { path: 'addplayer', component: PlayerAddComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'addteam', component: TeamAddComponent},
  { path: 'editteam', component: TeamEditComponent},
  { path: 'scores', component: ScoresComponent},
  { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}