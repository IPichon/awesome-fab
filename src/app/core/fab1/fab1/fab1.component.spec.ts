import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fab1Component } from './fab1.component';

describe('Fab1Component', () => {
  let component: Fab1Component;
  let fixture: ComponentFixture<Fab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
