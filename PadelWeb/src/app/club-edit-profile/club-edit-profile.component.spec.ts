import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubEditProfileComponent } from './club-edit-profile.component';

describe('ClubEditProfileComponent', () => {
  let component: ClubEditProfileComponent;
  let fixture: ComponentFixture<ClubEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
