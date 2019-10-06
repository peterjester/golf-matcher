import { Component, OnInit } from '@angular/core';
import { Player } from './player';
// import { Players} from '../mock-players';
import {Players} from '../../mock-players';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  // players = Players;
  // player: Player = {
  //   id: 1,
  //   name: 'William Ganley',
  //   nickname: 'Bill',
  //   email: 'wag945@psu.edu',
  //   phone: '609-313-3320',
  //   age: 39,
  //   handicap: 14,
  //   league: 'one'
  players : Player[];

  constructor(private playerService : PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players => this.players = players);
  }  
  selectedPlayer: Player;
  
  onSelect(player: Player): void {
    this.selectedPlayer = player;
    console.log('selected player: '+this.selectedPlayer.name);
  }
  ngOnInit() {
    this.getPlayers();
  }

  onDelete() {
    console.log("players onDelete selectedPlayer:"+this.selectedPlayer.name);
  }
}
