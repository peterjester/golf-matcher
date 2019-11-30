import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { Players} from '../mock-players';
import {Players} from '../../mock-players';
import { PlayerService } from '../player.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent {

  angForm: FormGroup;
  constructor(private playerService : PlayerService,
              private fb: FormBuilder,
              private router: Router) {
                this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      nickname: [''],
      email: ['',Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1)])],
      phone: ['',Validators.required],
      age: ['',Validators.required],
      handicap: ['',Validators.required],
      league: ['',Validators.required],
      scores: ['']
    })
  }

  onSubmit() {
    console.warn(this.angForm.value);
    this.playerService.addPlayer( {
                    name: this.angForm.value.firstName+" "+this.angForm.value.lastName, 
                    nickname: this.angForm.value.nickname,
                    email: this.angForm.value.email,
                    phone: this.angForm.value.phone,
                    age:  this.angForm.value.age,
                    handicap: this.angForm.value.handicap,
                    league: this.angForm.value.league,
                    scores: this.angForm.value.scores});
    
    this.router.navigateByUrl('/players');
  }
}
