import { Component, OnInit } from '@angular/core';
import { Player } from '../players/player';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-scores-edit',
  templateUrl: './scores-edit.component.html',
  styleUrls: ['./scores-edit.component.css']
})
export class ScoresEditComponent implements OnInit {

  public id?: string;
  public name: string;
  public nickname: string;
  public email: string;
  public phone: string;
  public age: number;
  public handicap: string;
  public league: string;
  public scores: number[];
  public editedPlayer: Player;

  public constructor(private route: ActivatedRoute,
                      private router: Router,
                      private playerService : PlayerService) {
    this.route.queryParams.subscribe(params => {
      console.log("scoresEditComponent params[id]:"+params["id"]);
      console.log("scoresEditComponent params[name]: "+params["name"]);
      console.log("scoresEditComponent params[nickname]: "+params["nickname"]);
      console.log("scoresEditComponent params[email]: "+params["email"]);
      this.id = params["id"];
      this.name = params["name"];
      this.nickname = params["nickname"];
      this.email = params["email"];
      this.phone = params["phone"];
      this.age = params["age"];
      this.handicap = params["handicap"];
      this.league = params["league"];
      this.scores = params["scores"];
      console.log("scoresEditComponent this.id: "+this.id);
      console.log("scoresEditComponent this.name: "+this.name);
      console.log(`scores at position 0: ${this.scores[0]} : 1: ${this.scores[1]} : 2: ${this.scores[2]} :`)
      console.log("scoresEditComponent this.scores.length: "+this.scores.length);
    });
  }

  ngOnInit() {
  }  

  onSubmit() {
    console.log("scoresEditComponent submit pressed");
    console.log("scoresEditComponent this.id: "+this.id);
    console.log("scoresEditComponent this.name: "+this.name);
    console.log("scoresEditComponent this.scores: " + this.scores);
      this.playerService.updatePlayer( {
      id: this.id,
      name: this.name, 
      nickname: this.nickname,
      email: this.email,
      phone: this.phone,
      age:  this.age,
      handicap: this.handicap,
      league: this.league,
      scores: this.scores.toString().split(',').map((item)=> { return parseInt(item) })
    });
    this.router.navigateByUrl("players");
  }
}
