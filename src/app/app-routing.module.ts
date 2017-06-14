import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-custom-preloader.strategy';

const routes: Routes = [

  {
    path: 'archive',
    loadChildren: './sections/archive/archive.module#ArchiveModule'
  },
  {
    path: 'contacts',
    loadChildren: './sections/contacts/contacts.module#ContactsModule'
  },
  {
    path: 'organisations',
    loadChildren: './sections/organisations/organisations.module#OrganisationsModule'
  },
  {
    path: 'profile',
    loadChildren: './sections/profile/profile.module#ProfileModule'
  },
  {
    path: 'recyclebin',
    loadChildren: './sections/recyclebin/recyclebin.module#RecyclebinModule'
  },
  {
    path: 'uploads',
    loadChildren: './sections/uploads/uploads.module#UploadsModule'
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
