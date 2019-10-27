import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import {Team} from '../teams/team';
import { Player } from '../players/player';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})

export class TeamEditComponent implements OnInit {

  public id: number;
  public name: string;
  public record: string;
  public league: string;
  public players: Player[];

  public constructor(private route: ActivatedRoute,
                      private router: Router,
                      private teamService : TeamService) {
    this.route.queryParams.subscribe(params => {
      console.log("TeamEditComponent params[id]:"+params["id"]);
      console.log("TeamEditComponent params[name]: "+params["name"]);
      console.log("TeamEditComponent params[record]: "+params["record"]);
      console.log("TeamEditComponent params[league]: "+params["league"]);
      this.id = params["id"];
      this.name = params["name"];
      this.record = params["record"];
      this.league = params["league"];
      this.players = [null];
      console.log("TeamEditComponent this.id: "+this.id);
      console.log("TeamEditComponent this.name: "+this.name);
    });
  }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log("TeamEditComponent onSubmit id: "+this.id);
    console.log("TeamEditComponent onSubmit name: "+this.name);
    console.log("TeamEditComponent onSubmit record: "+this.record);
    console.log("TeamEditComponent onSubmit league: "+this.league);
    this.teamService.updateTeam( {
                    id: this.id,
                    name: this.name, 
                    record: this.record,
                    league: this.league,
                    players: this.players});
      
    this.router.navigateByUrl('/teams');
  }
}
