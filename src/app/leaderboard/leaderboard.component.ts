import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Player } from '../players/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  sortedData: Player[];
  players: Player[];

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => {
      this.players = players;
      this.sortedData = players;
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  sortData(sort: Sort) {
    const data = this.players;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

      this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'age': return this.compare(a.age, b.age, isAsc);
        case 'handicap': return this.compare(a.handicap, b.handicap, isAsc);
        case 'league': return this.compare(a.league, b.league, isAsc);
        default: return 0;
      }
    });
  }
}
