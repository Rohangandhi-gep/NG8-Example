import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry/entry.component';


@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
