import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryDetailComponent,
    AllCountriesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
