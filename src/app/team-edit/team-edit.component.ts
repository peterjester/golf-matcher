import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import {Team} from '../teams/team';
import { Player } from '../players/player';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras} from "@angular/router";
import { PlayerService } from '../player.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})

export class TeamEditComponent implements OnInit {

  public id: string;
  public name: string;
  public record: string;
  public league: string;
  public players: Player[];
  public availablePlayers: Player[];
  playersFormControl = new FormControl();


  public constructor(private route: ActivatedRoute,
                      private router: Router,
                      private teamService : TeamService,
                      private playerService: PlayerService) {
    this.route.queryParams.subscribe(params => {
      console.log("TeamEditComponent params[id]:"+params["id"]);
      console.log("TeamEditComponent params[name]: "+params["name"]);
      console.log("TeamEditComponent params[record]: "+params["record"]);
      console.log("TeamEditComponent params[league]: "+params["league"]);
      this.id = params["id"];
      this.name = params["name"];
      this.record = params["record"];
      this.league = params["league"];
      this.players = params["players"] as Player[];
    });
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.getPlayers().subscribe( (players : Player[]) => {
      this.availablePlayers = players;
    });
  }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log("TeamEditComponent onSubmit id: "+this.id);
    console.log("TeamEditComponent onSubmit name: "+this.name);
    console.log("TeamEditComponent onSubmit record: "+this.record);
    console.log("TeamEditComponent onSubmit league: "+this.league);
    console.log(this.players);
    this.teamService.updateTeam( {
                    id: this.id,
                    name: this.name, 
                    record: this.record,
                    league: this.league,
                    players: this.players});
      
    this.router.navigateByUrl('/teams');
  }
}
