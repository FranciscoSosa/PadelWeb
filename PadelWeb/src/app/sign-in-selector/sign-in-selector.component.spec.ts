import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSelectorComponent } from './sign-in-selector.component';

describe('SignInSelectorComponent', () => {
  let component: SignInSelectorComponent;
  let fixture: ComponentFixture<SignInSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
