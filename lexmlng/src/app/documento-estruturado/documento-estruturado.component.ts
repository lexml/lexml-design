import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lexml-documento-estruturado',
  templateUrl: './documento-estruturado.component.html',
  styleUrls: ['./documento-estruturado.component.scss']
})
export class DocumentoEstruturadoComponent implements OnInit {

  @Input() panelHeading: string;
  elementosEstruturados = [];

  constructor() {

    this.elementosEstruturados.push(1, 2, 3);

   }

  ngOnInit() {
  }

}
