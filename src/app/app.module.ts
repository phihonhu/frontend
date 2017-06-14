import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Globals} from './core/globals/globals';

// UI
import { MaterialModule } from '@angular/material';
import { PeaxUserInterfaceModule } from 'pixie';

// Sections
import { CockpitModule } from './sections/cockpit/cockpit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    CockpitModule,
    LoginModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    PeaxUserInterfaceModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Globals
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
