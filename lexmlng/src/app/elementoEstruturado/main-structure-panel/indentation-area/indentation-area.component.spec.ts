import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentationAreaComponent } from './indentation-area.component';

describe('IndentationAreaComponent', () => {
  let component: IndentationAreaComponent;
  let fixture: ComponentFixture<IndentationAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentationAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
