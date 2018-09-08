import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pages8Component } from './pages8.component';

describe('Pages8Component', () => {
  let component: Pages8Component;
  let fixture: ComponentFixture<Pages8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pages8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pages8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
