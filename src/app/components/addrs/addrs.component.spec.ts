import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrsComponent } from './addrs.component';

describe('AddrsComponent', () => {
  let component: AddrsComponent;
  let fixture: ComponentFixture<AddrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
