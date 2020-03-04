import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page/page.component';
import { TextboxModule } from '../components/textbox/textbox.module';
import { DropdownModule } from '../components/dropdown/dropdown.module';
import { CheckboxModule } from '../components/checkbox/checkbox.module';
import { TableModule } from '../components/table/table.module';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    TextboxModule,
    DropdownModule,
    CheckboxModule,
    TableModule
  ]
})
export class PageModule { }
