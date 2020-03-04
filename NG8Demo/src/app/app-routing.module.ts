import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Entry1Component} from './entry1/component/entry1.component'


const routes: Routes = [
  {path: '',redirectTo:'demopage', pathMatch:'full'},
  {
    path: 'entry1',
    loadChildren: () => import('./entry1/entry1.module').then(m => m.Entry1Module)
  },
  { path: 'demopage', loadChildren: () => import('./demopage/demopage.module').then(m => m.DemopageModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
