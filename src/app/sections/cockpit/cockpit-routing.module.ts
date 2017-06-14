import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/route.service';
import { CockpitComponent } from './cockpit.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/cockpit', pathMatch: 'full' },
  { path: 'cockpit', component: CockpitComponent, data: { title: 'Cockpit' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CockpitRoutingModule { }
