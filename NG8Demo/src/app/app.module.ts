import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {Entry1Module} from './entry1/entry1.module'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Entry1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
