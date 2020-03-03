import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',redirectTo:'page', pathMatch:'full'},
  {
    path: 'entry',
    loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule)
  },
  { path: 'page', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
