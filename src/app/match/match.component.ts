import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../teams/team';
import { Player } from '../players/player';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent implements OnInit {

  public id: string;
  public name: string;
  public record: string;
  public league: string;
  public team1Players: Player[];
  public team2Players: Player[];
  public players: Player[];
  public teams: Team[];
  public selectedTeam: Team;
  public team: Team;
  public playerData: Player[];

  public constructor(private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
    private teamService: TeamService) {
    this.route.queryParams.subscribe(params => {
      console.log("MatchComponent params[id]:" + params["id"]);
      console.log("MatchComponent params[name]: " + params["name"]);
      console.log("MatchComponent params[record]: " + params["record"]);
      console.log("MatchComponent params[league]: " + params["league"]);
      this.team = JSON.parse(params["team"]) as Team
      this.id = params["id"];
      this.name = params["name"];
      this.record = params["record"];
      this.league = params["league"];
      this.players = [null];
      this.team1Players = [];
      this.team2Players = [];
      console.log("MatchComponent this.id: " + this.id);
      console.log("MatchComponent this.name: " + this.name);
    });
  }


  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
  }

  onCalculate() {
    console.log("MatchComponent onCalculate pressed");
    console.log(this.selectedTeam)
    console.log(this.team) //
    console.log(this.team.players) // this is the array of string of users.
    if(confirm(`Are you sure you want to match ${this.team.name} VS. ${this.selectedTeam.name}`)) {
    this.playerService.getPlayers()
      .subscribe(playerData => {
        this.playerData = playerData
        console.log(playerData)
        for (let i = 0; i < this.team.players.length; i++) {
          let playerName = JSON.stringify(this.team.players[i]).replace(/\"/g, '')
          for (let j = 0; j < this.playerData.length; j++) {
            let playerName2 = this.playerData[j].name.replace(/\"/g, '')
            if (playerName === playerName2) {
              console.log('they equaled')
              this.team1Players.push(this.playerData[j])
            }
          }
        }
        for (let i = 0; i < this.selectedTeam.players.length; i++) {
          const selectedPlayer = this.selectedTeam.players[i]
          console.log(this.selectedTeam.players)
          console.log(this.playerData)
          let playerName1 = JSON.stringify(this.selectedTeam.players[i]).replace(/\"/g, '')
          for (let j = 0; j < this.playerData.length; j++) {
            let playerName3 = this.playerData[j].name
            if (playerName1 === playerName3) {
              console.log('they equaled')
              this.team2Players.push(this.playerData[j])
            }
          }
        }
        console.log(this.team1Players)
        console.log(this.team2Players)
        let team1Player1Handicap = this.team1Players[0].handicap
        let team1Player2Handicap = this.team1Players[1].handicap
        let team1Player1LatestScore = this.team1Players[0].scores[this.team1Players[0].scores.length - 1]
        let team1Player2LatestScore = this.team1Players[1].scores[this.team1Players[1].scores.length - 1]
        // console.log(team1Player1Handicap)
        // console.log(team1Player2Handicap)
        // console.log(team1Player1LatestScore)
        // console.log(team1Player2LatestScore)

        let team2Player1Handicap = this.team2Players[0].handicap
        let team2Player2Handicap = this.team2Players[1].handicap
        let team2Player1LatestScore = this.team2Players[0].scores[this.team2Players[0].scores.length - 1]
        let team2Player2LatestScore = this.team2Players[1].scores[this.team2Players[1].scores.length - 1]
        // console.log(team2Player1Handicap)
        // console.log(team2Player2Handicap)
        // console.log(team2Player1LatestScore)
        // console.log(team2Player2LatestScore)

        let team1Points = 0
        let team2Points = 0
        // player 1 vs player 1
        let match1 = (team1Player1LatestScore - parseInt(team1Player1Handicap)) - (team2Player1LatestScore - parseInt(team2Player1Handicap)) // negative team 1 won. positive team 2 won
        // player 1 vs player 2
        let match2 = (team1Player1LatestScore - parseInt(team1Player1Handicap)) - (team2Player2LatestScore - parseInt(team2Player2Handicap)) // negative team 1 won. positive team 2 won
        // player 2 vs player 1
        let match3 = (team1Player2LatestScore - parseInt(team1Player2Handicap)) - (team2Player1LatestScore - parseInt(team2Player1Handicap)) // negative team 1 won. positive team 2 won
        // player 2 vs player 2
        let match4 = (team1Player2LatestScore - parseInt(team1Player2Handicap)) - (team2Player2LatestScore - parseInt(team2Player2Handicap)) // negative team 1 won. positive team 2 won

        if (match1 < 0) {
          team1Points=team1Points + 1
        } else if (match1 === 0) {
          team2Points=team2Points+.5
          team1Points=team1Points+.5
        } else {
          team2Points=team2Points + 1
        }
        if (match2 < 0) {
          team1Points=team1Points + 1
        } else if (match2 === 0) {
          team2Points=team2Points+.5
          team1Points=team1Points+.5
        } else {
          team2Points=team2Points + 1
        }
        if (match3 < 0) {
          team1Points=team1Points + 1
        } else if (match3 === 0) {
          team2Points=team2Points+.5
          team1Points=team1Points+.5
        } else {
          team2Points=team2Points + 1
        }
        if (match4 < 0) {
          team1Points=team1Points + 1
        } else if (match4 === 0) {
          team2Points=team2Points+.5
          team1Points=team1Points+.5
        } else {
          team2Points=team2Points + 1
        }

        console.log(team1Points)
        console.log(team2Points)
        team1Points = team1Points + parseInt(this.team.record)
        team2Points = team2Points + parseInt(this.selectedTeam.record)
        // let's update selectedTeam and team. team1 = team. team2 = selectedTeam
        this.teamService.updateTeam( {
          id: this.team.id,
          name: this.team.name,
          record: team1Points.toString(),
          league: this.team.league,
          players: this.team.players});

          this.teamService.updateTeam( {
            id: this.selectedTeam.id,
            name: this.selectedTeam.name,
            record: team2Points.toString(),
            league: this.selectedTeam.league,
            players: this.selectedTeam.players});
      })
    }

  }
}
