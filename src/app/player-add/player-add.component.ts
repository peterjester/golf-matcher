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
  // playerForm = new FormGroup( {
  //   firstName: new FormControl('',[Validators.required]),
  //   lastName: new FormControl(''),
  //   nickname: new FormControl(''),
  //   email: new FormControl('',[Validators.required]),
  //   phone: new FormControl('',[Validators.required]),
  //   age: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
  //   handicap: new FormControl('',[Validators.required]),
  //   league: new FormControl('',[Validators.required])
  // });

    // playerForm = this.fb.group({
    //   firstName: ['',Validators.required],
    //   lastName: ['',Validators.required],
    //   nickname: [''],
    //   email: [''],
    //   phone: [''],
    //   age: [''],
    //   handicap: [''],
    //   league: ['']
    // })
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
      email: ['',Validators.required],
      phone: ['',Validators.required],
      age: ['',Validators.required],
      handicap: ['',Validators.required],
      league: ['',Validators.required]
    })
  }

  onSubmit() {
    console.warn(this.angForm.value);
  //   Players.push( { id: Players.length+1,
  //                   name: this.playerForm.value.firstName+" "+this.playerForm.value.lastName, 
  //                   nickname: this.playerForm.value.nickname,
  //                   email: this.playerForm.value.email,
  //                   phone: this.playerForm.value.phone,
  //                   age:  this.playerForm.value.age,
  //                   handicap: this.playerForm.value.handicap,
  //                   league: this.playerForm.value.league});
    this.playerService.addPlayer( {
                    // id: Players.length+1,
                    name: this.angForm.value.firstName+" "+this.angForm.value.lastName, 
                    nickname: this.angForm.value.nickname,
                    email: this.angForm.value.email,
                    phone: this.angForm.value.phone,
                    age:  this.angForm.value.age,
                    handicap: this.angForm.value.handicap,
                    league: this.angForm.value.league});
    
    this.router.navigateByUrl('/players');
  }
}
