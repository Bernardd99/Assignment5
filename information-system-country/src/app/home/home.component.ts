import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../country.service';
import { COUNTRIES } from '../models/countries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  countriesPopulation: Country[] = [];
  countriesArea: Country[] = [];


  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.getCountriesPopulation();
    // this.getCountriesArea();
    this.countriesPopulation.sort((a, b) => b.population.localeCompare(a.population, undefined, { 'numeric': true }));
    // this.countriesArea.sort((a,b) => b.area.localeCompare(a.area,undefined, {'numeric': true}));
  }

  getCountriesPopulation() {
    // this.countryService.getCountries().subscribe(countries => this.countries = countries)
    this.countryService.getCountries().subscribe(countries => this.countriesPopulation = countries)
  }

  getCountriesArea() {
    this.countryService.getCountries().subscribe(countries => this.countriesArea = countries)
  }
}
