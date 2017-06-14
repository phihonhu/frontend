import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecyclebinRoutingModule } from './recyclebin-routing.module';
import { RecyclebinComponent } from './recyclebin.component';

@NgModule({
  imports: [
    CommonModule,
    RecyclebinRoutingModule
  ],
  declarations: [
    RecyclebinComponent
  ]
})
export class RecyclebinModule { }
