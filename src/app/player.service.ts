import { Injectable } from '@angular/core';
import { Player } from './players/player'
//import { Players } from './mock-players';
import {Players} from '../mock-players';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    console.log("player.service getPlayers");
    return of(Players);
  }

  addPlayer(player: Player) {
    console.log("PlayerService addPlayer");
    Players.push( { id: player.id,
                    name: player.name, 
                    nickname: player.nickname,
                    email: player.email,
                    phone: player.phone,
                    age:  player.age,
                    handicap: player.handicap,
                    league: player.league,
                    holes: player.holes});
  }
}
