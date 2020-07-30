import { CountryModel } from './country.model';
import { TravelRoadmapModel } from './roadmap.model';
import { TravelerModel } from './traveler.moldel';

export interface TravelModel {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    travelRoadmaps: TravelRoadmapModel[];
    countries: CountryModel[];
    travelerId: string;
    traveler: TravelerModel;
}
