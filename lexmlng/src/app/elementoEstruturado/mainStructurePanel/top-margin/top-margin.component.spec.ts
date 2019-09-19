import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMarginComponent } from './top-margin.component';

describe('TopMarginComponent', () => {
  let component: TopMarginComponent;
  let fixture: ComponentFixture<TopMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
