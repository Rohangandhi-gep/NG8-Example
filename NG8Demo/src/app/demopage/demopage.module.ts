import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemopageRoutingModule } from './demopage-routing.module';
import { DemopageComponent } from './component/demopage.component';
import { TextboxComponent } from '../components/textbox/component/textbox.component';
import { DropdownComponent } from '../components/dropdown/component/dropdown.component';
import { TableComponent } from '../components/table/component/table.component';


@NgModule({
  declarations: [DemopageComponent,TextboxComponent,DropdownComponent,TableComponent],
  imports: [
    CommonModule,
    DemopageRoutingModule
  ],
  exports:[DemopageComponent],
  entryComponents: [TextboxComponent,DropdownComponent,TableComponent]
})
export class DemopageModule { }
