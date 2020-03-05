import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CheckboxComponent},
]

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckboxModule { }
