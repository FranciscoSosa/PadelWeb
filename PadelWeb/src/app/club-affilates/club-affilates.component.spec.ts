import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAffilatesComponent } from './club-affilates.component';

describe('ClubAffilatesComponent', () => {
  let component: ClubAffilatesComponent;
  let fixture: ComponentFixture<ClubAffilatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubAffilatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubAffilatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
