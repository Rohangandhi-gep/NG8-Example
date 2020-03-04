import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemopageRoutingModule } from './demopage-routing.module';
import { DemopagecomponentComponent } from './demopagecomponent/demopagecomponent.component';


@NgModule({
  declarations: [DemopagecomponentComponent],
  imports: [
    CommonModule,
    DemopageRoutingModule
  ]
})
export class DemopageModule { }
