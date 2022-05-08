import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSignInComponent } from './club-sign-in.component';

describe('ClubSignInComponent', () => {
  let component: ClubSignInComponent;
  let fixture: ComponentFixture<ClubSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
