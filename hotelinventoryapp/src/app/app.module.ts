import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './core/interceptors/request.interceptor';
import {
  APP_CONFIG,
  APP_SERVICE_CONFIG,
} from './core/services/appconfig.service';
import { GlobalErrorHandler } from './core/services/errorhandler.service';
import { InitService } from './core/services/init.service';
import { EmployeeComponent } from './features/employee/employee.component';
import { HeaderComponent } from './features/header/header.component';
import { HeaderModule } from './features/header/header.module';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AppNavComponent } from './shared/components/app-nav/app-nav.component';
import { EmailValidatorDirective } from './shared/directives/email-validator/email-validator.directive';
import { HoverDirective } from './shared/directives/hover/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AppNavComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  exports: [HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

function initFactory(initService: InitService) {
  return () => initService.init();
}
