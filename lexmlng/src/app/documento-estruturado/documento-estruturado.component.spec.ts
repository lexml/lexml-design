import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoEstruturadoComponent } from './documento-estruturado.component';

describe('DocumentoEstruturadoComponent', () => {
  let component: DocumentoEstruturadoComponent;
  let fixture: ComponentFixture<DocumentoEstruturadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentoEstruturadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoEstruturadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
