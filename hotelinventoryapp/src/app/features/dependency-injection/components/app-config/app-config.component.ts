import { Component, Inject } from '@angular/core';
import { AppConfig } from 'src/app/services/AppConfig/AppConfig';
import { APP_SERVICE_CONFIG } from 'src/app/services/AppConfig/appconfig.service';

@Component({
  selector: 'app-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['./app-config.component.scss'],
})
export class AppConfigComponent {
  constructor(@Inject(APP_SERVICE_CONFIG) protected config: AppConfig) {}
}
