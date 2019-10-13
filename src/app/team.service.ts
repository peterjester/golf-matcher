import { Injectable } from '@angular/core';
import {Team} from './teams/team'
import {Teams} from './mock-teams';
import { Observable, of } from 'rxjs';

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

  deleteTeam(team: Team) {
    for( var i = 0; i < Teams.length; i++){ 
      if ( Teams[i] === team) {
        Teams.splice(i, 1); 
        console.log("teamservice onDelete deleting index:"+i+" "+team.name);
      }
    }
  }
}
