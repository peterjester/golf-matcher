import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Player } from './player';
import {Players} from '../../mock-players';
import { PlayerService } from '../player.service';
import {Router, NavigationExtras} from "@angular/router";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players : Player[];
  findPlayer: string;
  playerNotFound: boolean;

  // @ViewChild('players', {static: false}) list: ElementRef;
  @ViewChild(CdkVirtualScrollViewport,null)
  viewport: CdkVirtualScrollViewport;

  constructor(private playerService : PlayerService,
              private renderer: Renderer2,
              private router: Router) { 

      this.playerNotFound = false;
  }
       
    getPlayers(): void {
        this.playerService.getPlayers()
        .subscribe(players => {
          this.players = players;
          this.router.navigateByUrl('/players');
        });
    }  
    selectedPlayer: Player;
  
    onSelect(player: Player): void {
      this.selectedPlayer = player;
    }

    ngOnInit() {
      this.getPlayers();
      this.router.navigateByUrl('/players');
    }

    onDelete() {
      if(confirm("Are you sure you want to delete")) {
        this.playerService.deletePlayer(this.selectedPlayer);
      }
    
    }

    onAdd() {
      this.router.navigateByUrl('/addplayer');
    }

    onEdit() {
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

    onScoreEdit() {
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
      this.router.navigate(["editscores"], navigationExtras);
    }

    onFind() {
      this.playerNotFound = false;
      let matchFound: boolean;
      matchFound = false;
      for( var i = 0; i < this.players.length; i++){ 
        if ( this.players[i].name.includes(this.findPlayer)) {
          matchFound = true;
          this.viewport.scrollToIndex(i);
        }
      }
      if (false == matchFound)
      {
        this.playerNotFound = true;
      }
    }

    findByNameFocus() {
      this.playerNotFound = false;
    }
}
