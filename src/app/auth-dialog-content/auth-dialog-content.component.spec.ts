import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDialogContentComponent } from './auth-dialog-content.component';

describe('AuthDialogContentComponent', () => {
  let component: AuthDialogContentComponent;
  let fixture: ComponentFixture<AuthDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
