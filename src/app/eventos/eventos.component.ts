import { Component, OnInit } from '@angular/core';
import { Evento } from '../interface/evento.interface';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  todosLosEventos!: Evento[];
  eventos: Evento[];

  constructor(private usuariosService: UsuariosService) {
    this.eventos = [];
   }

  ngOnInit() {
    // this.usuariosService.getAllEventos()
    // .then(arrEventos => {
    //   this.todosLosEventos = arrEventos;
    //   this.eventos = arrEventos;
    // })
  }

}
