import { TestBed, fakeAsync } from '@angular/core/testing';

import { TeamService } from './team.service';
import { Teams } from './mock-teams';
import { of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

const data = of(
  [
    { payload: { doc: { id: '1', data: () => (Teams[0]) } } },
    { payload: { doc: { id: '2', data: () => (Teams[1]) } } },
    { payload: { doc: { id: '3', data: () => (Teams[2]) } } },
    { payload: { doc: { id: '4', data: () => (Teams[3]) } } }
  ]
);

const collectionStub = {
  snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
}

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
}

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeamService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });

    service = TestBed.get(TeamService);
  });

  it('should be created', () => {
    const service: TeamService = TestBed.get(TeamService);
    expect(service).toBeTruthy();
  });

  it('should retrieve team data', fakeAsync(() => {
    const result = service.getTeams();
    result.subscribe(data => {
      expect(collectionStub.snapshotChanges).toHaveBeenCalled();
      expect(data).toBeDefined();
      expect(data).toEqual(Teams);
    });
  }));

});
