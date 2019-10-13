import { Component, OnInit } from '@angular/core';
import { Player } from '../players/player';
import { Team } from '../teams/team';
import { PlayerService } from '../player.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];
  teams: Team[] = [];

  constructor(private playerService: PlayerService,
              private teamService: TeamService) { }

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe(teams=> this.teams = teams);
  }
}
