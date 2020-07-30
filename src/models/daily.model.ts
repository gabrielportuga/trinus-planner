import { CityModel } from './city.model';
import { TravelRoadmapModel } from './roadmap.model';

export interface DailyModel {
  id: string;
  place: string;
  description: string;
  travelRoadmap: TravelRoadmapModel;
}
