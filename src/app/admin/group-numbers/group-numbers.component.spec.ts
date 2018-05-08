import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNumbersComponent } from './group-numbers.component';

describe('GroupNumbersComponent', () => {
  let component: GroupNumbersComponent;
  let fixture: ComponentFixture<GroupNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
