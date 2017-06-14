import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/route.service';
import { RecyclebinComponent } from './recyclebin.component';

const routes: Routes = Route.withShell([
  { path: '', component: RecyclebinComponent, data: { title: 'Recycle Bin' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RecyclebinRoutingModule { }
