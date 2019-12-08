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

    return this.teamsCollection.doc(team.id).set(team);
  }

  updateTeam(team: Team) {

    return this.teamsCollection.doc(team.id).update(team);
  }

  deleteTeam(team: Team) {

    return this.teamsCollection.doc(team.id).delete();
  }
}
