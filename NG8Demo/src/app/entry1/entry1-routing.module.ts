import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopageComponent } from '../demopage/component/demopage.component';


const routes: Routes = [
  {
    path: 'demopage',
    component: DemopageComponent
  },
];

export const DemopageControlRoutes = routes;
//export class Entry1RoutingModule { }
