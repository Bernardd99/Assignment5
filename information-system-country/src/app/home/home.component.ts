import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../country.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  countriesPopulation: Country[] = [];
  countriesArea: Country[] = [];
  countriesGDP: Country[] = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.getCountries();
    this.getCountriesPopulation();
    this.getCountriesArea();
    this.getCountriesGDP();

    this.countriesPopulation = this.countriesPopulation.map(a => Object.assign({}, a));
    this.countriesArea = this.countriesArea.map(a => Object.assign({}, a));
    this.countriesGDP = this.countriesGDP.map(a => Object.assign({}, a));


    this.countriesPopulation.sort((a, b) =>
      b.population.localeCompare(a.population, undefined, { 'numeric': true }));
    this.countriesArea.sort((a, b) =>
      b.area.localeCompare(a.area, undefined, { 'numeric': true }));
    this.countriesGDP.sort((a, b) =>
      b.gdp.localeCompare(a.gdp, undefined, { 'numeric': true }));

      this.addComma();
  }

  getCountries() {
    this.countryService.getCountries().subscribe(countries => this.countries = countries)
  }
  getCountriesPopulation() {
    this.countryService.getCountries().subscribe(countries => this.countriesPopulation = countries)
  }
  getCountriesArea() {
    this.countryService.getCountries().subscribe(countries => this.countriesArea = countries)
  }
  getCountriesGDP() {
    this.countryService.getCountries().subscribe(countries => this.countriesGDP = countries)
  }

  numberWithCommas(s: string) {
    return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  addComma() {
    for (let i = 0; i < this.countries.length; i++) {
      this.countriesPopulation[i].population = this.numberWithCommas(this.countriesPopulation[i].population)
      this.countriesArea[i].area = this.numberWithCommas(this.countriesArea[i].area)
      this.countriesGDP[i].gdp = this.numberWithCommas(this.countriesGDP[i].gdp)
    }
  }
}



