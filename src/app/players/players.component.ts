import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Player } from './player';
// import { Players} from '../mock-players';
import {Players} from '../../mock-players';
import { PlayerService } from '../player.service';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players : Player[];

  @ViewChild('players', {static: false}) list: ElementRef;

  constructor(private playerService : PlayerService,
              private renderer: Renderer2,
              private router: Router) { 

      // this.renderer.listen('window', 'click',(e:Event)=>{
      //   console.log("players: got click event");
      //   let elementId: string = (event.target as Element).id;
      //   let className: string = (event.target as Element).className; 
      //   console.log("players: elementId="+elementId);
      //   console.log("players: className="+className);
      //   if (className !== "selected")
      //   {
      //     this.selectedPlayer=null;
      //   }
      // });
  }
       
    getPlayers(): void {
        this.playerService.getPlayers()
        .subscribe(players => {
          console.log("players getPlayers subscribe returned");
          this.players = players;
          this.router.navigateByUrl('/players');
        });
    }  
    selectedPlayer: Player;
  
    onSelect(player: Player): void {
      console.log("Players onSelect");
      this.selectedPlayer = player;
    }

    ngOnInit() {
      this.getPlayers();
      this.router.navigateByUrl('/players');
    }

    onDelete() {
      console.log("players onDelete selectedPlayer:"+this.selectedPlayer.name);
      // for( var i = 0; i < this.players.length; i++){ 
      //   if ( this.players[i] === this.selectedPlayer) {
      //     this.players.splice(i, 1); 
      //   }
      // }
      if(confirm("Are you sure you want to delete")) {
        this.playerService.deletePlayer(this.selectedPlayer);
      }
    
    }

    onAdd() {
      console.log("players onAdd");
      this.router.navigateByUrl('/addplayer');
    }

    onEdit() {
      console.log("players onEdit");
      // this.router.navigateByUrl('editplayer');
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "id": this.selectedPlayer.id,
            "name": this.selectedPlayer.name,
            "nickname": this.selectedPlayer.nickname,
            "email": this.selectedPlayer.email,
            "phone": this.selectedPlayer.phone,
            "age": this.selectedPlayer.age,
            "handicap": this.selectedPlayer.handicap,
            "league": this.selectedPlayer.league,
            "scores": this.selectedPlayer.scores
        }
      };
      this.router.navigate(["editplayer"], navigationExtras);
    }
}
