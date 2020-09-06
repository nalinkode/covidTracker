import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../service/covid-service.service';
import {GlobalDataSummary} from '../models/global-data-summary';
import { GoogleChartInterface } from 'ng2-google-charts';

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
  pieChart: GoogleChartInterface = {
  chartType: 'PieChart'
  };

  columnChart: GoogleChartInterface = {
  chartType: 'ColumnChart'
  };

  
  globalData:GlobalDataSummary[];

  constructor(private covidService : CovidServiceService) { }

  ngOnInit() {
    this.getGlobaleData();
  }

  initChart( caseType : string){
    let datatable = [];
    datatable.push(["Country", "Cases"]);
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
        if(res.deaths > 1000){
           value = res.deaths;
        }
      }

      if(caseType == 'r'){
         if(res.recovered > 1000){
           value = res.recovered;
        }
      }
      
      datatable.push([ res.country, value])
      
    })

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: datatable,
     //firstRowIsData: true,
     options: {'Country': 'Cases'},
    };

    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: datatable,
     //firstRowIsData: true,
     options: {'Country': 'Cases'},
    };
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
         this.initChart('');
      }
    })   
  }


  onChangeCheck(input : HTMLInputElement){
    this.initChart(input.v);
  }

}