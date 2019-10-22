import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from '../team.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent {

  angForm: FormGroup;

  constructor(private teamService : TeamService,
    private fb: FormBuilder,
    private router: Router) {
      this.createForm();
    }

  createForm() {
    this.angForm = this.fb.group({
      name: ['',Validators.required],
      record: ['',Validators.required],
      league: ['',Validators.required],
      players: ['',Validators.required]
    })
  }
  
  onSubmit() {
    console.warn(this.angForm.value);
    // this.teamService.addTeam( {
    //                 id: this.angForm.value.id,
    //                 name: this.angForm.value.firstName+" "+this.angForm.value.lastName, 
    //                 league: this.angForm.value.league});
    
    this.router.navigateByUrl('/teams');
  }
}
