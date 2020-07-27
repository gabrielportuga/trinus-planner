import { CityModel } from './city.model';
import { TravelModel } from './travel.model';

export interface TravelRoadmapModel {
  id: string;
  place: string;
  city: CityModel;
  description: string;
  startDate: string;
  endDate: string;
  travel: TravelModel;
}
