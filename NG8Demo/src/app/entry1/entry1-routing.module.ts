import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopageComponent } from '../demopage/component/demopage.component';
import { Entry1Component } from './component/entry1.component';


const routes: Routes = [
 {path: '', component: Entry1Component}
 
];


export class Entry1RoutingModule { }
