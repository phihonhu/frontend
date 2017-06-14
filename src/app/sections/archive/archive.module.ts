import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive.component';

import { PeaxUserInterfaceModule } from 'pixie';
import { ArchiveService } from './archive.service';

// Mockbackend
import { FakeBackendProvider } from '../../testing/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ArchiveRoutingModule,
    PeaxUserInterfaceModule
  ],
  declarations: [
    ArchiveComponent,
  ],
  providers: [
    ArchiveService,
    FakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})
export class ArchiveModule { }
