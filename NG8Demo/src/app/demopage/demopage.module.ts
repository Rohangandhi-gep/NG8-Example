import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemopageRoutingModule } from './demopage-routing.module';
import { DemopageComponent } from './component/demopage.component';


@NgModule({
  declarations: [DemopageComponent],
  imports: [
    CommonModule,
    DemopageRoutingModule
  ],
  exports:[DemopageComponent]
})
export class DemopageModule { }
