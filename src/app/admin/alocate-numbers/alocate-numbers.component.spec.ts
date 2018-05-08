import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocateNumbersComponent } from './alocate-numbers.component';

describe('AlocateNumbersComponent', () => {
  let component: AlocateNumbersComponent;
  let fixture: ComponentFixture<AlocateNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlocateNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlocateNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
