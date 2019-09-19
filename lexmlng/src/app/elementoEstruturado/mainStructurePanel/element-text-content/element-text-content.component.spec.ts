import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTextContentComponent } from './element-text-content.component';

describe('ElementTextContentComponent', () => {
  let component: ElementTextContentComponent;
  let fixture: ComponentFixture<ElementTextContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementTextContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTextContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
