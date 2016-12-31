import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { displayPublic } from './display-public.pipe'
import { Truncate } from './truncate.pipe'
import { FilterNames } from './filter-names.pipe'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, displayPublic, Truncate, FilterNames],
  bootstrap: [AppComponent]
})
export class AppModule { }
