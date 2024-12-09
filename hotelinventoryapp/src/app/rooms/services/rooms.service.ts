import {Inject, Injectable} from '@angular/core';
import {RoomList} from '../rooms';
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
              private httpClient: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
  }

  getRooms() {
    return this.httpClient.get<RoomList[]>('/api/rooms');
  }
}
