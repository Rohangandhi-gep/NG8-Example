import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './component/page1/page1.component';


const routes: Routes = [
  {
    path: '', component: Page1Component, children: [
      { path: 'textbox', loadChildren: () => import('./../plugins/textbox/textbox.module').then(m => m.TextboxModule) },
      { path: 'checkbox', loadChildren: () => import('./../plugins/checkbox/checkbox.module').then(m => m.CheckboxModule) },
      { path: 'table', loadChildren: () => import('./../plugins/table/table.module').then(m => m.TableModule) },
      { path: 'dropdown', loadChildren: () => import('./../plugins/dropdown/dropdown.module').then(m => m.DropdownModule) }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1RoutingModule { }
