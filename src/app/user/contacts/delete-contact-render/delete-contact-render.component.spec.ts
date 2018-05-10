import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactRenderComponent } from './delete-contact-render.component';

describe('DeleteContactRenderComponent', () => {
  let component: DeleteContactRenderComponent;
  let fixture: ComponentFixture<DeleteContactRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteContactRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContactRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
