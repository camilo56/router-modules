import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page43Component } from './page43.component';

describe('Page43Component', () => {
  let component: Page43Component;
  let fixture: ComponentFixture<Page43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
