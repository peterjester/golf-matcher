import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEditComponent } from './team-edit.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

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
