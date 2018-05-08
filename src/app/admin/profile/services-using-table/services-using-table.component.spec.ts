import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesUsingTableComponent } from './services-using-table.component';

describe('ServicesUsingTableComponent', () => {
  let component: ServicesUsingTableComponent;
  let fixture: ComponentFixture<ServicesUsingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesUsingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesUsingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
