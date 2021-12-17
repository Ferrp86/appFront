import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Evento } from '../interface/evento.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number;
  lng: number;

  arrEventos: Evento[];

  constructor(private eventosService: EventosService) {
    this.lat = 37.3826;
    this.lng = -5.99629;

    this.arrEventos = [];
  }

  async ngOnInit() {
    this.arrEventos = await this.eventosService.getAllEvent();

    this.arrEventos.map(async evento => {
      let direccion = evento.localizacion;
      let response = await this.eventosService.getLocation(direccion);
      evento.latitud = response.results[0].geometry.location.lat;
      evento.longitud = response.results[0].geometry.location.lng;
    })
  }

}
