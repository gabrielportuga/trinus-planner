import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TravelService } from '../services/travel.service';

@Injectable()
export class TravelListResolver implements Resolve<any> {

  constructor(private travelService: TravelService) {}

  resolve() {
    return this.travelService.getTravels();
  }
}
