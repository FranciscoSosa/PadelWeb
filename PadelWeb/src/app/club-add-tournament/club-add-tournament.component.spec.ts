import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAddTournamentComponent } from './club-add-tournament.component';

describe('ClubAddTournamentComponent', () => {
  let component: ClubAddTournamentComponent;
  let fixture: ComponentFixture<ClubAddTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubAddTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubAddTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
