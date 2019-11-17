import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teams } from '../mock-teams';
import { TeamEditComponent } from './team-edit.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';

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

describe('TeamEditComponent', () => {
  let component: TeamEditComponent;
  let fixture: ComponentFixture<TeamEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEditComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
