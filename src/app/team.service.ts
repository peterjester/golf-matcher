import { Injectable } from '@angular/core';
import {Team} from './teams/team'
import {Teams} from './mock-teams';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamsComponent } from './teams/teams.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsCollection: AngularFirestoreCollection<Team>;
  teams: Observable<Team[]>;

  constructor(private db: AngularFirestore) { 
    this.teamsCollection = this.db.collection('Teams');
  }

  getTeams(): Observable<Team[]> {
    console.log("team-service getTeams");
    
    this.teams = this.teamsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Team;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    return (this.teams);
  }

  addTeam(team: Team) {
    console.log("TeamService addTeam");
    // Teams.push( { id: team.id,
    //               name: team.name, 
    //               record: team.record,
    //               league: team.league,
    //               players: null});

    return this.teamsCollection.doc(team.id).set(team);
  }

  updateTeam(team: Team) {
    // for (var i = 0; i < Teams.length; i++) {
    //   console.log("TeamService updateTeam comparing Teams[i].id: "+Teams[i].id+" to "+team.id);
    //   if (Teams[i].id == team.id)
    //   {
    //     console.log("TeamService updateTeam updating id: "+team.id);
    //     console.log("TeamService updateTeam updaint name: "+team.name);
    //     console.log("TeamService updateTeam updating record: "+team.record);
    //     console.log("TeamService updateTeam updating league: "+team.league);
    //     Teams[i].name = team.name;
    //     Teams[i].record = team.record;
    //     Teams[i].league = team.league;
    //     Teams[i].players = team.players;
    //   }
    // }

    return this.teamsCollection.doc(team.id).update(team);
  }

  deleteTeam(team: Team) {
    // for( var i = 0; i < Teams.length; i++){ 
    //   if ( Teams[i] === team) {
    //     Teams.splice(i, 1); 
    //     console.log("teamservice onDelete deleting index:"+i+" "+team.name);
    //   }
    // }

    return this.teamsCollection.doc(team.id).delete();
  }
}
