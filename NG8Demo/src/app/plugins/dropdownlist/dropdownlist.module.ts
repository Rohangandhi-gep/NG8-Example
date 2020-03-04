import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownlistRoutingModule } from './dropdownlist-routing.module';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';


@NgModule({
  declarations: [DropdownlistComponent],
  imports: [
    CommonModule,
    DropdownlistRoutingModule
  ]
})
export class DropdownlistModule { }
