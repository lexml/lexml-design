import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentoEstruturadoComponent } from './documento-estruturado/documento-estruturado.component';
import { ElementoEstruturadoComponent } from './elemento-estruturado/elemento-estruturado.component';
import { LeftMarginComponent } from './elementoEstruturado/left-margin/left-margin.component';
import { IndentationAreaComponent } from './elementoEstruturado/main-structure-panel/indentation-area/indentation-area.component';

import { RightMarginComponent } from './elementoEstruturado/right-margin/right-margin.component';
import { MainStructurePanelComponent } from './elementoEstruturado/main-structure-panel/main-structure-panel.component';
import { TopMarginComponent } from './elementoEstruturado/mainStructurePanel/top-margin/top-margin.component';
import { BottomMarginComponent } from './elementoEstruturado/mainStructurePanel/bottom-margin/bottom-margin.component';
import { ElementTextContentComponent } from './elementoEstruturado/mainStructurePanel/element-text-content/element-text-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentoEstruturadoComponent,
    ElementoEstruturadoComponent,
    LeftMarginComponent,
    IndentationAreaComponent,
    RightMarginComponent,
    MainStructurePanelComponent,
    TopMarginComponent,
    BottomMarginComponent,
    ElementTextContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
