import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';

import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    OrganisationsRoutingModule,
    MdButtonModule
  ],
  declarations: [
    OrganisationsComponent
  ]
})
export class OrganisationsModule { }
