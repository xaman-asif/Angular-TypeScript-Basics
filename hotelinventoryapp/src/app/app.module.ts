import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  APP_CONFIG,
  APP_SERVICE_CONFIG,
} from './services/AppConfig/appconfig.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppNavComponent,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
