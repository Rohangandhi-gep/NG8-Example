import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemopageRoutingModule } from './demopage-routing.module';
import { DemopageComponent } from './demopage/demopage.component';


@NgModule({
  declarations: [DemopageComponent],
  imports: [
    CommonModule,
    DemopageRoutingModule
  ]
})
export class DemopageModule { }
