  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

 private globalData = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/09-05-2020.csv'

 constructor(private http: HttpClient) { }

 getGlobalData(){
   return this.http.get(this.globalData, {responseType: 'text'} ).pipe(
     map(result => {
       let rows  = result.split('\n');
       rows.forEach(row=>{
         let cols = row.split(/,(?=\S)/)
         console.log(cols)
       })
       return [];

     })
   )
 }


}