import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopageComponent } from './component/demopage.component';


const routes: Routes = [{ path: 'demopage', component: DemopageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemopageRoutingModule { }
