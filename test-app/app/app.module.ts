import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KioNg2CanvasModule } from '../../src/canvas.module'


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KioNg2CanvasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
