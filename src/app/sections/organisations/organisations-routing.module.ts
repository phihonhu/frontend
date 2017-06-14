import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/route.service';
import { OrganisationsComponent } from './organisations.component';

const routes: Routes = Route.withShell([
  { path: '', component: OrganisationsComponent, data: { title: 'Organisations' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrganisationsRoutingModule { }
