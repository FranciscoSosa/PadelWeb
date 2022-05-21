import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserChooseDayAndClubPage } from './user-choose-day-and-club.page';

describe('UserChooseDayAndClubPage', () => {
  let component: UserChooseDayAndClubPage;
  let fixture: ComponentFixture<UserChooseDayAndClubPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChooseDayAndClubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserChooseDayAndClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
