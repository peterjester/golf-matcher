import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import { Team } from './team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  teams: Team[];
 
  selectedTeam : Team;

  constructor(private teamService : TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
        .subscribe(teams => this.teams = teams);
  }  

  onSelect(team: Team): void {
    this.selectedTeam = team;
    console.log('selected team: '+this.selectedTeam.name);
  }

  onDelete() {
    console.log("teams onDelete selectedTeam:"+this.selectedTeam.name);
    this.teamService.deleteTeam(this.selectedTeam);
  }
}
