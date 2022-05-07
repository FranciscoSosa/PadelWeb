import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMatchResultsComponent } from './club-match-results.component';

describe('ClubMatchResultsComponent', () => {
  let component: ClubMatchResultsComponent;
  let fixture: ComponentFixture<ClubMatchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubMatchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubMatchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
