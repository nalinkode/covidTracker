import { Component, OnInit,  AfterViewInit } from '@angular/core';
import { CovidServiceService } from '../service/covid-service.service';
import {GlobalDataSummary} from '../models/global-data-summary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public datatable = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  chart = {
    PieChart : "PieChart",
    CloumnChart :"ColumnChart",
     height: 500,
    options : {
     animations: {
       duration:1000,
       easing: 'out'
     }
   }
  }
   

  
  globalData:GlobalDataSummary[];

  constructor(private covidService : CovidServiceService) { }

  ngOnInit() {
    this.getGlobaleData();
  }

  initChart( caseType : string){
   
    this.datatable.push(["Country", "Cases"]);
    debugger
    this.globalData.forEach(res=>{
      let value : number;
      if(caseType == 'c'){
        if(res.confirmed > 2000){
           value = res.confirmed;
        }
      }
  
      if(caseType == 'a'){
        if(res.active > 2000){
           value = res.active;
        }
      }

      if(caseType == 'd'){
        if(res.deaths > 10000){
           value = res.deaths;
        }
      }

      if(caseType == 'r'){
         if(res.recovered > 2000){
           value = res.recovered;
        }
      }
      
      this.datatable.push([ res.country, value])
      
    })
  }

  getGlobaleData(){
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
         this.initChart('c');
      }
    })   
  }


  onChangeCheck(input : HTMLInputElement){
    debugger
    this.initChart(input.value);
  }

}