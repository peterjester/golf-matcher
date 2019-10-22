import { TestBed, fakeAsync } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { Players } from '../mock-players';
import { of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

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

describe('PlayerService', () => {
  let service: PlayerService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlayerService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });

    service = TestBed.get(PlayerService);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('should be created', () => {
    const service: PlayerService = TestBed.get(PlayerService);
    expect(service).toBeTruthy();
    expect(angularFirestoreStub.collection).toHaveBeenCalledWith('Players');
  });

  it('should retrieve player data', fakeAsync(() => {
    const result = service.getPlayers();
    result.subscribe(data => {
      expect(collectionStub.snapshotChanges).toHaveBeenCalled();
      expect(data).toBeDefined();
      expect(data).toEqual(Players);
    });
  }));

});
