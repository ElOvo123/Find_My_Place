import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  public paises =[
    {image:"", país:"Afegasnistão", capital:"Cabul", continente:"Ásia"},
  ]
}
