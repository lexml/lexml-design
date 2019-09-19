import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMarginComponent } from './right-margin.component';

describe('RightMarginComponent', () => {
  let component: RightMarginComponent;
  let fixture: ComponentFixture<RightMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
