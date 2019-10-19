// import { Component, OnInit } from '@angular/core';
// import { Player } from './scores';
// // import { Players} from '../mock-players';
// // import {Players} from '../../mock-players';
// import { PlayerService } from '../player.service';

// @Component({
//   selector: 'app-scores',
//   templateUrl: './scores.component.html',
//   styleUrls: ['./scores.component.css']
// })
// export class ScoresComponent implements OnInit {
//   // players = Players;
//   // player: Player = {
//   //   id: 1,
//   //   name: 'William Ganley',
//   //   nickname: 'Bill',
//   //   email: 'wag945@psu.edu',
//   //   phone: '609-313-3320',
//   //   age: 39,
//   //   handicap: 14,
//   //   league: 'one'
//   players : Player[];

//   constructor(private playerService : PlayerService) { }

//   getPlayers(): void {
//     this.playerService.getPlayers()
//         .subscribe(players => this.players = players);
//   }  
//   selectedPlayer: Player;
  
//   onSelect(player: Player): void {
//     this.selectedPlayer = player;
//     console.log('selected player: '+this.selectedPlayer.name);
//   }
//   ngOnInit() {
//     this.getPlayers();
//   }

//   onDelete() {
//     console.log("players onDelete selectedPlayer:"+this.selectedPlayer.name);
//   }
// }


import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Player } from '../players/player';
import { PlayerService } from '../player.service';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
  providers: []
})
// @Component({
//     selector: 'app-scores',
//     templateUrl: './scores.component.html',
//     styleUrls: ['./scores.component.css']
//     // providers: [Service]
// })
export class ScoresComponent implements OnInit {
    players: Player[];

    // constructor(service: Service) {
    //     this.players = service.getCountries();
    // }
    constructor(private playerService : PlayerService) {
     }

  getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players => this.players = players);
  }  
      ngOnInit() {
    this.getPlayers();
  }
}


// @NgModule({
//     imports: [
//         BrowserModule,
//         DxDataGridModule,
//         DxTemplateModule
//     ],
//     declarations: [ScoresComponent],
//     bootstrap: [ScoresComponent]
// })
// export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
