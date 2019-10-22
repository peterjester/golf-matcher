import { Injectable } from '@angular/core';
import { Player } from './players/player'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersCollection: AngularFirestoreCollection<Player>;
  players: Observable<Player[]>;

  constructor(private db: AngularFirestore) {
    this.playersCollection = this.db.collection('Players');
  }

  getPlayers(): Observable<Player[]> {
    console.log("player.service getPlayers");
    
    this.players = this.playersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Player;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.players.forEach(value => {console.debug(value)})

    return (this.players);
  }

  addPlayer(player: Player) {
    console.log("PlayerService addPlayer");

    return this.playersCollection.add(player);
  }

  updatePlayer(player: Player) {
    return this.playersCollection.doc(player.id).update(player);
  }

  deletePlayer(player: Player) {
    return this.playersCollection.doc(player.id).delete();
  }

  findPlayerByName(name: string): Observable<Player[]> {
    return this.db.collection<Player>('Players', ref => ref.where('name', '==', name).limit(1))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Player;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

}
