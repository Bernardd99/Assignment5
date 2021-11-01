import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  countryId: number;
  country: Country = {} as Country;
  countryService: CountryService;

  constructor(private actRoute: ActivatedRoute, countryService: CountryService) {
    this.countryId = this.actRoute.snapshot.params.countryId;
    this.countryService = countryService;
  }

  ngOnInit(): void {
    this.getCountry(this.countryId);
    this.country.population = this.numberWithCommas(this.country.population) 
  }

  getCountry(countryId: number){
    this.countryService.getCountry(countryId).subscribe(c => this.country = c)
  }

  numberWithCommas(s: string) {
    return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}