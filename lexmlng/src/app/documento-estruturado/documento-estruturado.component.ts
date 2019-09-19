import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lexml-documento-estruturado',
  templateUrl: './documento-estruturado.component.html',
  styleUrls: ['./documento-estruturado.component.scss']
})
export class DocumentoEstruturadoComponent implements OnInit {

  @Input() panelHeading: string;
  @Input() panelFooter: string;
  structuredElements = [];

  constructor() {

    for(var i = 0; i < 25; i++){
      this.structuredElements.push(i + 1);
    }
   }

  ngOnInit() {
  }

}
