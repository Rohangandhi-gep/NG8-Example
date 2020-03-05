import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './component/textbox/textbox.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TextboxComponent},
]

@NgModule({
  declarations: [TextboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TextboxModule { }
