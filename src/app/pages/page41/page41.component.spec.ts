import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page41Component } from './page41.component';

describe('Page41Component', () => {
  let component: Page41Component;
  let fixture: ComponentFixture<Page41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
