import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lexml-elemento-estruturado',
  templateUrl: './elemento-estruturado.component.html',
  styleUrls: ['./elemento-estruturado.component.scss']
})
export class ElementoEstruturadoComponent implements OnInit {

  @Input() elementId: string;

  constructor() { }

  ngOnInit() {
  }

  printElement() {
    console.log(this.elementId, document.getElementById(this.elementId));
    console.log('coordenadas', document.getElementById(this.elementId).getBoundingClientRect())
  }

}
