import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PlayersComponent } from './players.component';
import { Players } from 'src/mock-players';
import { Player } from 'src/app/players/player';
import { PlayerService } from '../player.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import { of } from 'rxjs';

const data = of(
  [
    { payload: { doc: { id: '1', data: () => (Players[0]) } } },
    { payload: { doc: { id: '2', data: () => (Players[1]) } } },
    { payload: { doc: { id: '3', data: () => (Players[2]) } } },
    { payload: { doc: { id: '4', data: () => (Players[3]) } } }
  ]
);

const collectionStub = {
  snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
}

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
}

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let player: Player;
  let service: PlayerService;
  let angularFirestore: AngularFirestore;
  let renderer: Renderer2;
  let routerTest: RouterTestingModule;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        PlayersComponent,
        RouterTestingModule,
        PlayerService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    }));
  
    // beforeEach(() => { 
    //   router = TestBed.get(Router);
    //   component = new PlayersComponent(service,renderer,router); 
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
    // component.onSelect(player);
    // fixture.componentInstance.selectedPlayer === null;
  });

});
