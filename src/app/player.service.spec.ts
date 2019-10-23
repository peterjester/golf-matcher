import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { AngularFirestore } from 'angularfire2/firestore';

const angularFiresotreStub = {
} 

describe('PlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ 
      { provide: AngularFirestore, useValue: angularFiresotreStub }
    ]
  }));

  it('should be created', () => {
    const service: PlayerService = TestBed.get(PlayerService);
    expect(service).toBeTruthy();
  });
});
