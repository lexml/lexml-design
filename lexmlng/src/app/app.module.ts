import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentoEstruturadoComponent } from './documento-estruturado/documento-estruturado.component';
import { ElementoEstruturadoComponent } from './elemento-estruturado/elemento-estruturado.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentoEstruturadoComponent,
    ElementoEstruturadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
