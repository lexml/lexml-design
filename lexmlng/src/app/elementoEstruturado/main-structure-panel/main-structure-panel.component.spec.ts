import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStructurePanelComponent } from './main-structure-panel.component';

describe('MainStructurePanelComponent', () => {
  let component: MainStructurePanelComponent;
  let fixture: ComponentFixture<MainStructurePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStructurePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStructurePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
