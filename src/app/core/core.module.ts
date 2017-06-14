import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, ConnectionBackend, RequestOptions } from '@angular/http';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { HttpService } from './http/http.service';
import { HttpCacheService } from './http/http-cache.service';
import { PeaxUserInterfaceModule } from 'pixie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { PilotNavigationComponent } from './shell/pilot-navigation/pilot-navigation.component';
import { MdIconModule } from '@angular/material';


export function createHttpService(backend: ConnectionBackend,
                                  defaultOptions: RequestOptions,
                                  httpCacheService: HttpCacheService) {
  return new HttpService(backend, defaultOptions, httpCacheService);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    PeaxUserInterfaceModule,
    BrowserAnimationsModule,
    MdIconModule
  ],
  exports: [
    HeaderComponent,
    PeaxUserInterfaceModule
  ],
  declarations: [
    ShellComponent,
    HeaderComponent,
    //PilotNavigationComponent
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    HttpCacheService,
    {
      provide: Http,
      deps: [XHRBackend, RequestOptions, HttpCacheService],
      useFactory: createHttpService
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
