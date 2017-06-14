import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeaxUserInterfaceModule } from 'pixie';
import { CockpitRoutingModule } from './cockpit-routing.module';
import { CockpitComponent } from './cockpit.component';
import { CockpitService } from './cockpit.service';


@NgModule({
  imports: [
    CommonModule,
    CockpitRoutingModule,
    PeaxUserInterfaceModule
  ],
  declarations: [
    CockpitComponent
  ],
  providers: [
    CockpitService
  ]
})
export class CockpitModule { }
