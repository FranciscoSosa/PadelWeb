import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAddMatchComponent } from './club-add-match.component';

describe('ClubAddMatchComponent', () => {
  let component: ClubAddMatchComponent;
  let fixture: ComponentFixture<ClubAddMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubAddMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubAddMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
