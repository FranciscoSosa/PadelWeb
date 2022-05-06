import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubConfirmMatchComponent } from './club-confirm-match.component';

describe('ClubConfirmMatchComponent', () => {
  let component: ClubConfirmMatchComponent;
  let fixture: ComponentFixture<ClubConfirmMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubConfirmMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubConfirmMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
