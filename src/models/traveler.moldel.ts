import { CountryModel } from './country.model';

export interface TravelerModel {
    id: string;
    name: string;
    email: string;
    passaport: number;
    issuedDate: string;
    validityDate: string;
    country: CountryModel;
}
