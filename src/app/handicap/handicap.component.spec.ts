import { async, TestBed } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';

import { HandicapComponent } from './handicap.component';
import { PlayerService } from '../player.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Players } from 'src/mock-players';

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
describe('HandicapComponent', () => {
  let component: HandicapComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandicapComponent ],
      providers: [
        PlayerService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

});
