import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocationRenderComponent } from './delete-location-render.component';

describe('DeleteLocationRenderComponent', () => {
  let component: DeleteLocationRenderComponent;
  let fixture: ComponentFixture<DeleteLocationRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLocationRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLocationRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
