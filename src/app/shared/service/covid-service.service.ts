  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {GlobalDataSummary} from '../models/global-data-summary';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

 private globalData = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/09-05-2020.csv'

 constructor(private http: HttpClient) { }

 getGlobalData(){
   return this.http.get(this.globalData, {responseType: 'text'} ).pipe(
     map(result => {
       let data : GlobalDataSummary[] = [];
       let rows  = result.split('\n');
       rows.splice(0,1);
       
       rows.forEach(row=>{
         let cols = row.split(/,(?=\S)/)
         
         data.push({
           country : cols[3],
           confirmed : +cols[7],
           deaths : +cols[8],
           recovered : +cols[9],
           active : +cols[10]
         })
       })
       console.log(data);
       return [];

     })
   )
 }


}