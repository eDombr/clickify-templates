import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordRenderComponent } from './reset-password-render.component';

describe('ResetPasswordRenderComponent', () => {
  let component: ResetPasswordRenderComponent;
  let fixture: ComponentFixture<ResetPasswordRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
