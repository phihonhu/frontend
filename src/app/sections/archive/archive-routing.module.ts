import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/route.service';
import { ArchiveComponent } from './archive.component';

const routes: Routes = Route.withShell([
  { path: '', component: ArchiveComponent, data: { title: 'Archive' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ArchiveRoutingModule { }
