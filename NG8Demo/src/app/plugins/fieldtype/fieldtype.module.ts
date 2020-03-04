import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldtypeRoutingModule } from './fieldtype-routing.module';
import { FieldtypeComponent } from './fieldtype/fieldtype.component';


@NgModule({
  declarations: [FieldtypeComponent],
  imports: [
    CommonModule,
    FieldtypeRoutingModule
  ]
})
export class FieldtypeModule { }
