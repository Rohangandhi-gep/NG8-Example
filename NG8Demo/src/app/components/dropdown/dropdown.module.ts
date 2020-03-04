import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    DropdownRoutingModule
  ],
  exports:[DropdownComponent]
})
export class DropdownModule { }
