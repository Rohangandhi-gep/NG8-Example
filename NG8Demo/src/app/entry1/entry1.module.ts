import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{DemopageModule} from '..//demopage/demopage.module'

import {Entry1Component} from './component/entry1.component'

@NgModule({
  declarations: [Entry1Component],
  imports: [
    CommonModule,
    DemopageModule
  ],
  exports:[
    Entry1Component
  ]

})
export class Entry1Module { }
