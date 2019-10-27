import { Injectable } from '@angular/core';
import {Team} from './teams/team'
import {Teams} from './mock-teams';
import { Observable, of } from 'rxjs';
import { TeamsComponent } from './teams/teams.component';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    console.log("team-service getTeams");
    return of(Teams);
  }

  addTeam(team: Team) {
    console.log("TeamService addTeam");
    Teams.push( { id: team.id,
                  name: team.name, 
                  record: team.record,
                  league: team.league,
                  players: null});
  }

  updateTeam(team: Team) {
    for (var i = 0; i < Teams.length; i++) {
      console.log("TeamService updateTeam comparing Teams[i].id: "+Teams[i].id+" to "+team.id);
      if (Teams[i].id == team.id)
      {
        console.log("TeamService updateTeam updating id: "+team.id);
        console.log("TeamService updateTeam updaint name: "+team.name);
        console.log("TeamService updateTeam updating record: "+team.record);
        console.log("TeamService updateTeam updating league: "+team.league);
        Teams[i].name = team.name;
        Teams[i].record = team.record;
        Teams[i].league = team.league;
        Teams[i].players = team.players;
      }
    }
  }

  deleteTeam(team: Team) {
    for( var i = 0; i < Teams.length; i++){ 
      if ( Teams[i] === team) {
        Teams.splice(i, 1); 
        console.log("teamservice onDelete deleting index:"+i+" "+team.name);
      }
    }
  }
}
