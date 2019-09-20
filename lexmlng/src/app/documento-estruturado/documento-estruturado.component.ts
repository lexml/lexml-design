import { Component, OnInit, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ElementsService, Element } from '../model/elements.service';
import { BoundariesRect } from '../model/view-model.service';

@Component({
  selector: 'lexml-documento-estruturado',
  templateUrl: './documento-estruturado.component.html',
  styleUrls: ['./documento-estruturado.component.scss']
})
export class DocumentoEstruturadoComponent implements AfterContentChecked {
  
  @Input() panelName: string;
  @Input() panelHeading: string;
  @Input() panelFooter: string;
  @Input() boundariesRect: BoundariesRect;

  bodyHeight: string;

  structuredElements: Element[] = [];

  constructor(private elementService: ElementsService) {
    this.structuredElements = this.elementService.elements;
  }

  ngAfterContentChecked(){
    this.computeBodyHeight();
  }

  computeBodyHeight(): void {
    const footer = document.getElementById(this.panelName + 'Footer');
    const header = document.getElementById(this.panelName + 'Header');
    const panel = document.getElementById(this.panelName)

    if (footer && header && panel) {
      const footerHeight = footer.getBoundingClientRect().height;
      const headerHeight = header.getBoundingClientRect().height;

      const panelBorderBottomWidth = parseInt(window.getComputedStyle(panel).borderBottomWidth.replace('px', ''));
      const panelBorderTopWidth = parseInt(window.getComputedStyle(panel).borderTopWidth.replace('px', ''));
      const panelBottomMargin = parseInt(window.getComputedStyle(panel).marginBottom.replace('px', ''));
      const panelTopMargin = parseInt(window.getComputedStyle(panel).marginTop.replace('px', ''));

    this.bodyHeight = this.boundariesRect.height 
        - (footerHeight + headerHeight) 
        - (panelBorderBottomWidth + panelBorderTopWidth)
        - (panelBottomMargin + panelTopMargin)
        + 'px';
    } else {
      this.bodyHeight = this.boundariesRect.height + 'px';
    }
  }

  printElement() {
    console.log('this element', document.getElementById(this.panelName));
  }
}
