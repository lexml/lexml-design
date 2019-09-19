import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMarginComponent } from './left-margin.component';

describe('LeftMarginComponent', () => {
  let component: LeftMarginComponent;
  let fixture: ComponentFixture<LeftMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
