import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMarginComponent } from './bottom-margin.component';

describe('BottomMarginComponent', () => {
  let component: BottomMarginComponent;
  let fixture: ComponentFixture<BottomMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
