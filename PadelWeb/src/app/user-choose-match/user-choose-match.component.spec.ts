import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChooseMatchComponent } from './user-choose-match.component';

describe('UserChooseMatchComponent', () => {
  let component: UserChooseMatchComponent;
  let fixture: ComponentFixture<UserChooseMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChooseMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChooseMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
