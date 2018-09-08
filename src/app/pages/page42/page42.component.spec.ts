import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page42Component } from './page42.component';

describe('Page42Component', () => {
  let component: Page42Component;
  let fixture: ComponentFixture<Page42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
