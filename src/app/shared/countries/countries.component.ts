import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../service/covid-service.service';
import {GlobalDataSummary} from '../models/global-data-summary';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
 data : GlobalDataSummary[];
 countries : string[] = [];
 totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;

constructor(private covidService : CovidServiceService ) { }

  ngOnInit() {
      this.covidService.getGlobalData().subscribe(result=>{
        this.data = result;
        this.data.forEach(c=>{
          this.countries.push(c.country);
        })
      })
  }

  onChange(country : string){
     this.data.forEach(res=>{
       if(res.country == country){
         this.totalActive = res.active;
         this.totalConfirmed = res.confirmed;
         this.totalDeaths = res.deaths;
         this.totalRecovered = res.recovered;
       }
     })

    
  }

}