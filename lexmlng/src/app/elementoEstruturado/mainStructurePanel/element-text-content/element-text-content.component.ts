import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lexml-element-text-content',
  templateUrl: './element-text-content.component.html',
  styleUrls: ['./element-text-content.component.scss']
})
export class ElementTextContentComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
