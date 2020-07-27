import { CountryModel } from './country.model';
import { TravelRoadmapModel } from './travel-roadmap-model';
import { TravelerModel } from './traveler.moldel';

export interface TravelModel {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    travelRoadmap: TravelRoadmapModel[];
    countries: CountryModel[];
    travelerId: string;
    traveler: TravelerModel;
}
