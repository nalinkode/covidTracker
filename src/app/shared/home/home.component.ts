import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../service/covid-service.service';
import {GlobalDataSummary} from '../models/global-data-summary';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  
  globalData :GlobalDataSummary[];

  constructor(private covidService :  CovidServiceService) { }

  ngOnInit() {
    this.covidService.getGlobalData().subscribe({
      next : (result)=>{

        console.log(result)
     this.globalData = result;
      result.forEach(dat=>{
        if(!Number.isNaN(dat.confirmed)){
        this.totalActive += dat.active;
        this.totalConfirmed += dat.confirmed
        this.totalDeaths += dat.deaths
        this.totalRecovered += dat.recovered
         }   
        })
      }
    })
  }

}