import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { Dropdown } from './dropdown.compoment/dropdown.compoment.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [Dropdown.CompomentComponent, DropdownComponent],
  imports: [
    CommonModule,
    DropdownRoutingModule
  ]
})
export class DropdownModule { }
