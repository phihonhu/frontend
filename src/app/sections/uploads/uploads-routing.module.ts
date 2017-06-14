import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/route.service';
import { UploadsComponent } from './uploads.component';

const routes: Routes = Route.withShell([
  { path: '', component: UploadsComponent, data: { title: 'Uploads' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UploadsRoutingModule { }
