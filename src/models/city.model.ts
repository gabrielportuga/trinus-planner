import { CountryModel } from './country.model';

export interface CityModel {
    name: string;
    country: CountryModel;
}
