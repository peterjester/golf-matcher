import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAddComponent } from './team-add.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TeamAddComponent', () => {
  let component: TeamAddComponent;
  let fixture: ComponentFixture<TeamAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAddComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
