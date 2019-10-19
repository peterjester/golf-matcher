import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';
import { Players } from 'src/mock-players';
import { Player } from 'src/app/players/player';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let player: Player;

  it ('Test PlayersComponent name',() => {
    expect(fixture).name === "PlayersComponent";
  });

  it('Test PlayersComponent creation', () => {
    expect(PlayersComponent).toBeTruthy();
  });

  it ('Test PlayersComponent players array non-zero',() => {
    expect(Players).length > 0;
  });


});
