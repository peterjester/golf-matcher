import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../players/player';
import {TeamService} from '../team.service';
import { Team } from '../teams/team';
import { PointsCalculator } from './points-calculator';

@Component({
  selector: 'app-handicap',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  constructor(private playerService : PlayerService,
    private teamService : TeamService) { }

  players: Player[];
  teams: Team[];

  /**
   * @brief get all the players, then calculate their handicaps
   */
  ngOnInit() {
    this.getPlayers();
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
        .subscribe(teams => {
          this.teams = teams; 
          console.log('craig');
          console.log(teams);
        })

  }  
  /**
   * @brief retrieve all of the players from the database
   */
  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => {
      this.players = players;
      this.calculatePoints();
    });
  }

  /**
   * @brief calculate a players handicap, then update the player in the database
   */
  calculatePoints(): void {
    for(let player of this.players) {
      const tempHandicap : number =  5 //HandicapCalculator.calculateHandicapForScores(player.scores);
      player.handicap = Number(tempHandicap).toFixed(0);
      // this.playerService.updatePlayer(player);
    }
  }

}
