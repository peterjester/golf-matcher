import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {TeamService} from '../team.service';
import { Team } from './team';
import {Router, NavigationExtras} from "@angular/router";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  teams: Team[];
 
  selectedTeam : Team;
  findTeam: string;
  teamNotFound: boolean;

  // @ViewChild('teams', {static: false}) list: ElementRef;
  @ViewChild(CdkVirtualScrollViewport,null)
  viewport: CdkVirtualScrollViewport;

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
    this.teamNotFound = false;
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
        .subscribe((teams) => {
          this.teams = teams
        });
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
      queryParams: this.selectedTeam
    };
    this.router.navigate(["editteam"], navigationExtras);
  }

  onMatch() {
    console.log("match");
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "team": JSON.stringify(this.selectedTeam)
      }
    };
    this.router.navigate(["match"], navigationExtras);
  }

  onFind() {
    console.log("teams onFind findTeam="+this.findTeam);
    this.teamNotFound = false;
    let matchFound: boolean;
    matchFound = false;
    for( var i = 0; i < this.teams.length; i++){ 
      console.log("teams comparing teams[i].name: "+this.teams[i].name+" to findTeam:"+this.findTeam);
      if ( this.teams[i].name.includes(this.findTeam)) {
        console.log("teams onFind found match for "+this.findTeam+" in item "+i);
        matchFound = true;
        this.viewport.scrollToIndex(i);
      }
    }
    if (false == matchFound)
    {
      this.teamNotFound = true;
    }
  }

  findByNameFocus() {
    console.log("teams findByNameFocus");
    this.teamNotFound = false;
  }

}
