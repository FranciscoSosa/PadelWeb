import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubConfirmResultComponent } from './club-confirm-result.component';

describe('ClubConfirmResultComponent', () => {
  let component: ClubConfirmResultComponent;
  let fixture: ComponentFixture<ClubConfirmResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubConfirmResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubConfirmResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
