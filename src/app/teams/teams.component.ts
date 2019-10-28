import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {TeamService} from '../team.service';
import { Team } from './team';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  teams: Team[];
 
  selectedTeam : Team;

  @ViewChild('teams', {static: false}) list: ElementRef;

  constructor(private teamService : TeamService,
              private renderer: Renderer2,
              private router: Router) {
    // this.renderer.listen('window', 'click',(e:Event)=>{
    //   // console.log("teams: got click event");
    //   let elementId: string = (event.target as Element).id;
    //   let className: string = (event.target as Element).className; 
    //   // console.log("teams: elementId="+elementId);
    //   // console.log("teams: className="+className);
    //   if (className !== "selected")
    //   {
    //     this.selectedTeam=null;
    //   } 
    // });
  }

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
    if(confirm("Are you sure you want to delete")) {
      this.teamService.deleteTeam(this.selectedTeam);
    }
  }

  onAdd() {
    console.log("teams onAdd");
    this.router.navigateByUrl('/addteam');
  }

  onEdit() {
    console.log("teams onEdit");
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": this.selectedTeam.id,
          "name": this.selectedTeam.name,
          "record": this.selectedTeam.record,
          "league": this.selectedTeam.league,
          "players": this.selectedTeam.players
      }
    };
    this.router.navigate(["editteam"], navigationExtras);
  }

}
