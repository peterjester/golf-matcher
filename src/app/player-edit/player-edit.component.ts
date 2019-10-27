import { Component, OnInit } from '@angular/core';
import { Player } from '../players/player';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {

  public id?: string;
  public name: string;
  public nickname: string;
  public email: string;
  public phone: string;
  public age: number;
  public handicap: number;
  public league: string;
  public scores: number[];
  public editedPlayer: Player;

  public constructor(private route: ActivatedRoute,
                      private router: Router,
                      private playerService : PlayerService) {
    this.route.queryParams.subscribe(params => {
      console.log("PlayerEditComponent params[id]:"+params["id"]);
      console.log("PlayerEditComponent params[name]: "+params["name"]);
      console.log("PlayerEditComponent params[nickname]: "+params["nickname"]);
      console.log("PlayerEditComponent params[email]: "+params["email"]);
      this.id = params["id"];
      this.name = params["name"];
      this.nickname = params["nickname"];
      this.email = params["email"];
      this.phone = params["phone"];
      this.age = params["age"];
      this.handicap = params["handicap"];
      this.league = params["league"];
      this.scores = [0];
      console.log("PlayerEditComponent this.id: "+this.id);
      console.log("PlayerEditComponent this.name: "+this.name);
      console.log("PlayerEditComponent this.scores.length: "+this.scores.length);
    });
  }

  ngOnInit() {
  }  

  onSubmit() {
    console.log("PlayerEditComponent submit pressed");
    console.log("PlayerEditComponent this.id: "+this.id);
    console.log("PlayerEditComponent this.name: "+this.name);
      this.playerService.updatePlayer( {
      id: this.id,
      name: this.name, 
      nickname: this.nickname,
      email: this.email,
      phone: this.phone,
      age:  this.age,
      handicap: this.handicap,
      league: this.league,
      scores: this.scores
    });
    this.router.navigateByUrl("players");
  }
}
