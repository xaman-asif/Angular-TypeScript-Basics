import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConfig } from './AppConfig';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = { apiEndpoint: environment.apiEndpoint };
