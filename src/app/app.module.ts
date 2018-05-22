import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
//import { ParserComponent } from './parser/parser.component';

@NgModule({
  declarations: [
    AppComponent,
    //ParserComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
