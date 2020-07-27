import { CityModel } from "./city.model";
import { TransportType } from "./transport-type.mdel";

export interface CityPlanModel {
    originPlace: CityModel;
    destinationPlace: CityModel;
    originDate: string;
    destinationDate: string;
    transportation: TransportType;
}