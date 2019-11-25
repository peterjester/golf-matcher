import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../players/player';
import { HandicapCalculator } from './handicap-calculator';

@Component({
  selector: 'app-handicap',
  templateUrl: './handicap.component.html',
  styleUrls: ['./handicap.component.css']
})
export class HandicapComponent implements OnInit {

  constructor(private playerService : PlayerService) { }

  players: Player[];

  /**
   * @brief get all the players, then calculate their handicaps
   */
  ngOnInit() {
    this.getPlayers();
  }

  /**
   * @brief retrieve all of the players from the database
   */
  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => {
      this.players = players;
      this.calculateHandicap();
    });
  }

  /**
   * @brief calculate a players handicap, then update the player in the database
   */
  calculateHandicap(): void {
    for(let player of this.players) {
      const tempHandicap : number =  HandicapCalculator.calculateHandicapForScores(player.scores);
      player.handicap = Number(tempHandicap).toFixed(0);
      this.playerService.updatePlayer(player);
    }
  }

}
