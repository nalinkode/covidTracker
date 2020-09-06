import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../service/covid-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private covidService :  CovidServiceService) { }

  ngOnInit() {
    this.covidService.getGlobalData().subscribe({
      next : (result)=>{
        console.log(result)
      }
    })
  }

}