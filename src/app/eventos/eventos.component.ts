import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Evento } from '../interface/evento.interface';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  arrEventos: Evento[];

  @Output() idEvento: EventEmitter<number>;

  constructor(private eventosService: EventosService) {

    this.arrEventos = [];
    this.idEvento = new EventEmitter();

  }

  ngOnInit() {
    this.eventosService.getAllEvent()
      .then(response => this.arrEventos = response)
      .catch(err => console.log(err));
  }

  mostrarEvento(pId: any) {
    this.idEvento.emit(pId)
  }

  recuperarEventos() {
    window.location.reload();
  }

  agregarEventosAgenda(pId: any) {
    this.idEvento.emit(pId);
  }

}
