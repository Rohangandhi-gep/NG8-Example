import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DropdownComponent},
]

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DropdownModule { }
