import {InjectionToken} from "@angular/core";
import {AppConfig} from "./appconfig.interface";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

//I can make multiple tokens and multiple configs
// export const APP_SERVICE_CONFIG2 = new InjectionToken<AppConfig>('app.config2');
// then I have to add this to app.module.ts
// select appropriate token in providers using useValue
// and then use it in the constructor of the service
// constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig)
export const APP_CONFIG: AppConfig = {
  apiEndpoint: 'http://localhost:3000/api'
}

export const APP_CONFIG2: AppConfig = {
  apiEndpoint: 'http://localhost:4000/api'
}
