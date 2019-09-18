import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoEstruturadoComponent } from './elemento-estruturado.component';

describe('ElementoEstruturadoComponent', () => {
  let component: ElementoEstruturadoComponent;
  let fixture: ComponentFixture<ElementoEstruturadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementoEstruturadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoEstruturadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
