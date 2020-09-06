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
constructor(private covidService : CovidServiceService ) { }

  ngOnInit() {
      this.covidService.getGlobalData().subscribe(result=>{
        this.data = result;
        this.data.forEach(c=>{
          this.countries.push(c.country);
        })
      })
  }

}