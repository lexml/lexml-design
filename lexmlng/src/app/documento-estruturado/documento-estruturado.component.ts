import { Component, OnInit, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ElementsService, Element } from '../model/elements.service';
import { BoundariesRect } from '../model/view-model.service';

@Component({
  selector: 'lexml-documento-estruturado',
  templateUrl: './documento-estruturado.component.html',
  styleUrls: ['./documento-estruturado.component.scss']
})
export class DocumentoEstruturadoComponent implements OnInit, AfterContentChecked {
  
  @Input() panelName: string;
  @Input() panelHeading: string;
  @Input() panelFooter: string;
  @Input() boundariesRect: BoundariesRect;

  bodyHeight: string;

  structuredElements: Element[] = [];

  constructor(private elementService: ElementsService) {
  }

  ngOnInit() {
    this.structuredElements = this.elementService.generateElements(this.panelName);
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
    const start = Date.now();

    const body = document.getElementById(this.panelName + 'Body');
    const bodyBoundingClientRect = body.getBoundingClientRect();

    console.log(bodyBoundingClientRect);
    const firstElementIndex = this.binarySearchUpperBoundary(
      this.structuredElements, 0, this.structuredElements.length - 1, bodyBoundingClientRect.top);
    const lastElementIndex = this.binarySearchLowerBoundary(
      this.structuredElements, 0, this.structuredElements.length - 1, bodyBoundingClientRect.bottom); 

    console.log('Range: ', firstElementIndex, lastElementIndex);
    console.log('Execution Time: ', Date.now() - start);
  }

  binarySearchUpperBoundary(elements: Element[], l: number, r: number, top_y_coordinate: number): number {
      if (r >= l) {
        const middle = Math.floor((l + r) / 2);
        const elementBoundingClientRect = document.getElementById(this.structuredElements[middle].id).getBoundingClientRect();

        if (elementBoundingClientRect.top > top_y_coordinate){
          if (middle === l){
            return middle;
          }
          return this.binarySearchUpperBoundary(elements, l, middle, top_y_coordinate);
        }

        if (elementBoundingClientRect.top <= top_y_coordinate) {
          if (middle === l || elementBoundingClientRect.height + elementBoundingClientRect.top > top_y_coordinate) {
            return middle;
          } else {
            return this.binarySearchUpperBoundary(elements, middle, r, top_y_coordinate);
          }
        }
      }
      return -1;
  }

  binarySearchLowerBoundary(elements: Element[], l: number, r: number, bottom_y_coordinate: number) {
    if (r >= l) {
      const middle = Math.ceil((l + r) / 2);
      const elementBoundingClientRect = document.getElementById(this.structuredElements[middle].id).getBoundingClientRect();

      if (elementBoundingClientRect.bottom < bottom_y_coordinate){
        if (middle === r) {
          return middle;
        }
        return this.binarySearchLowerBoundary(elements, middle, r, bottom_y_coordinate);
      }

      if (elementBoundingClientRect.bottom >= bottom_y_coordinate) {
        if (middle === r || elementBoundingClientRect.bottom - elementBoundingClientRect.height < bottom_y_coordinate) {
          return middle;
        }
        return this.binarySearchLowerBoundary(elements, l, middle, bottom_y_coordinate);
      }
    }
    return -1;
  }
}
