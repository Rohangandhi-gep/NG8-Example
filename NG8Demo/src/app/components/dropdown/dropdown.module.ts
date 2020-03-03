import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './component/dropdown.component';


@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    DropdownRoutingModule
  ]
})
export class DropdownModule { }
