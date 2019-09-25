import { Component, OnInit, Input } from '@angular/core';
import { Element, ElementsService } from '../model/elements.service';

@Component({
  selector: 'lexml-elemento-estruturado',
  templateUrl: './elemento-estruturado.component.html',
  styleUrls: ['./elemento-estruturado.component.scss']
})
export class ElementoEstruturadoComponent implements OnInit {

  @Input() element: Element;

  constructor(private elementService: ElementsService) { }

  ngOnInit() {
    
  }

  printElement() {
    console.log(this.element.id, document.getElementById(this.element.id));
    console.log('coordinates', document.getElementById(this.element.id).getBoundingClientRect());
  }

}
