import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Evento } from '../interface/evento.interface';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  arrEventos: Evento[];

  constructor(private eventosService: EventosService) {

    this.arrEventos = [];

  }

  ngOnInit() {
    this.eventosService.getAllEvent()
      .then(response => this.arrEventos = response)
      .catch(err => console.log(err));
  }

}
