import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number;
  lng: number;

  constructor() {
    this.lat = 37.3826;
    this.lng = -5.99629;
   }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((posicion) => {
      console.log(posicion);
    })



  }

}
