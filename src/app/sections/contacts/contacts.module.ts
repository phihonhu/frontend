import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';

import { PeaxUserInterfaceModule } from 'pixie';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    PeaxUserInterfaceModule
  ],
  declarations: [
    ContactsComponent
  ]
})
export class ContactsModule { }
