import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerService } from '../player.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { LeaderboardComponent } from './leaderboard.component';
import { Players } from 'src/mock-players';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


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

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardComponent ],
      imports: [
      ],
      providers: [
        PlayerService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Temporarily disabling until a better solution is found
   * Bug where when these are uncommented, error is caused by Auth component
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('Test LeaderboardComponent name',() => {
    expect(fixture).name === "LeaderboardComponent";
   });
});
