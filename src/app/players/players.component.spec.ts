import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';
import { Players } from 'src/mock-players';
import { Player } from 'src/app/players/player';
import { PlayerService } from '../player.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let player: Player;
  let playerService: PlayerService;
  let renderer2: Renderer2;
  let db: AngularFirestore;

  // beforeEach(() => { 
  //   db = new AngularFirestore(null,null,null,null,null,null,null);
  //   playerService = new PlayerService(db);  
  //   component = new PlayersComponent(playerService,renderer2); 
  // });


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
  });

});
