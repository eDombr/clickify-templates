import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocationRenderComponent } from './edit-location-render.component';

describe('EditLocationRenderComponent', () => {
  let component: EditLocationRenderComponent;
  let fixture: ComponentFixture<EditLocationRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLocationRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocationRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
