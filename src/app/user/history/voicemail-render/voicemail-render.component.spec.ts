import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicemailRenderComponent } from './voicemail-render.component';

describe('VoicemailRenderComponent', () => {
  let component: VoicemailRenderComponent;
  let fixture: ComponentFixture<VoicemailRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicemailRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicemailRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
