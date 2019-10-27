import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from '../team.service';
import {Team} from '../teams/team';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent implements OnInit {

  angForm: FormGroup;
  teams: Team[];

  constructor(private teamService : TeamService,
    private fb: FormBuilder,
    private router: Router) {
      this.createForm();
    }

    ngOnInit() {
      this.getTeams();
    }
  
    createForm() {
    this.angForm = this.fb.group({
      name: ['',Validators.required],
      record: ['',Validators.required],
      league: ['',Validators.required],
      players: ['']
    })
  }
  
  getTeams(): void {
    this.teamService.getTeams()
        .subscribe(teams => this.teams = teams);
  }  

  onSubmit() {
    console.warn(this.angForm.value);
    this.teamService.addTeam( {
                    id: this.teams.length+1,
                    name: this.angForm.value.name, 
                    record: this.angForm.value.record,
                    league: this.angForm.value.league,
                    players: this.angForm.value.players});
    
    this.router.navigateByUrl('/teams');
  }
}
