import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Fab1Component } from './core/fab1/fab1/fab1.component';
import { FabSquareComponent } from './core/fab-suaquare/fab-square/fab-square.component';

@NgModule({
  declarations: [
    AppComponent,
    Fab1Component,
    FabSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
