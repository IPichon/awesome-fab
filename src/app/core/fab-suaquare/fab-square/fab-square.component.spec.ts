import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSquareComponent } from './fab-square.component';

describe('FabSquareComponent', () => {
  let component: FabSquareComponent;
  let fixture: ComponentFixture<FabSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
