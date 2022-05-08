import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubConfirmTournamentComponent } from './club-confirm-tournament.component';

describe('ClubConfirmTournamentComponent', () => {
  let component: ClubConfirmTournamentComponent;
  let fixture: ComponentFixture<ClubConfirmTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubConfirmTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubConfirmTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
