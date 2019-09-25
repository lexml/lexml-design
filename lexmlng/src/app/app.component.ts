import { Component, OnChanges, DoCheck, AfterViewChecked, HostListener } from '@angular/core';
import { BoundariesRect } from './model/view-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ngLexML title';
  footer = 'ngLexML footer';
  boundariesRect: BoundariesRect;

  constructor() {
    this.boundariesRect = new BoundariesRect(0, 0, window.innerWidth, window.innerHeight);
  }

  /**
   * Adjust window after resize.
   */
  @HostListener('window:resize')
  onResize() {
    this.boundariesRect = new BoundariesRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
