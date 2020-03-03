import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Entry1Component} from './entry1/component/entry1.component'
import { DemopageControlRoutes } from './entry1/entry1-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'Ng8Demo', pathMatch: 'full' },
  { path: 'Ng8Demo', component: Entry1Component, children:[...DemopageControlRoutes]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
