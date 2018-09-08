import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pestana2Component } from './pestana2.component';

describe('Pestana2Component', () => {
  let component: Pestana2Component;
  let fixture: ComponentFixture<Pestana2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pestana2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pestana2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
