import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubHeaderComponent } from './club-header.component';

describe('ClubHeaderComponent', () => {
  let component: ClubHeaderComponent;
  let fixture: ComponentFixture<ClubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
