import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PlayersComponent } from './players.component';
import { Players } from 'src/mock-players';
import { Player } from 'src/app/players/player';
import { PlayerService } from '../player.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let player: Player;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        PlayersComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    }));

  it ('Test PlayersComponent name',() => {
    expect(fixture).name === "PlayersComponent";
   });

  it('Test PlayersComponent creation', () => {
    expect(PlayersComponent).toBeTruthy();
  });

  it ('Test PlayersComponent players array non-zero',() => {
    expect(Players).length > 0;
  });

  it('Test PlayersComponent onSelect()',() => { 
    // component.onSelect(player); 
  });
});
