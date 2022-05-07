import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChooseDayAndClubComponent } from './user-choose-day-and-club.component';

describe('UserChooseDayAndClubComponent', () => {
  let component: UserChooseDayAndClubComponent;
  let fixture: ComponentFixture<UserChooseDayAndClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChooseDayAndClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChooseDayAndClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
