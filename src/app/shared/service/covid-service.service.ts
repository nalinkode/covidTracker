  
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
   this.http.get(this.globalData, ).pipe(
     map(result => {
       
     })
   )
 }


}