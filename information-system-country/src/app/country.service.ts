import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Country } from './models/country';
import { COUNTRIES } from './models/countries';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries = of(COUNTRIES)

  constructor() { }

  getCountries(): Observable<Country[]> {
    return this.countries;
  }

  getCountry(countryId: number): Observable<Country> {
    return this.countries.pipe(map(countries => countries.filter(countries => countries.countryId == countryId)[0]))
  }
}
