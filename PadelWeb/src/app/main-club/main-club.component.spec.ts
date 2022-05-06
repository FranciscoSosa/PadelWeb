import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClubComponent } from './main-club.component';

describe('MainClubComponent', () => {
  let component: MainClubComponent;
  let fixture: ComponentFixture<MainClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
