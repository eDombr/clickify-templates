import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StubEditorComponent } from './stub-editor.component';

describe('StubEditorComponent', () => {
  let component: StubEditorComponent;
  let fixture: ComponentFixture<StubEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StubEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StubEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
