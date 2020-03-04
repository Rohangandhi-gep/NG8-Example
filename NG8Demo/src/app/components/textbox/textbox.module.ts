import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextboxRoutingModule } from './textbox-routing.module';
import { TextboxComponent } from './textbox/textbox.component';


@NgModule({
  declarations: [TextboxComponent],
  imports: [
    CommonModule,
    TextboxRoutingModule
  ],
  exports:[TextboxComponent]
})
export class TextboxModule { }
