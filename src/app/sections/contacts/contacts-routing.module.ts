import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/route.service';
import { ContactsComponent } from './contacts.component';

const routes: Routes = Route.withShell([
  { path: '', component: ContactsComponent, data: { title: 'Contacts' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactsRoutingModule { }
