import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemopageRoutingModule } from './demopage-routing.module';
import { Demopage } from './demopage.component/demopage.component.component';


@NgModule({
  declarations: [Demopage.ComponentComponent],
  imports: [
    CommonModule,
    DemopageRoutingModule
  ]
})
export class DemopageModule { }
