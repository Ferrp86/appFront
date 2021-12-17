import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  usuario: string;

  constructor() {
    this.nombre = '';
    this.primer_apellido = '';
    this.segundo_apellido = '';
    this.usuario = '';
  }

  ngOnInit(): void {
    if (localStorage.getItem('segundo_apellido')?.toString !== null) {
      this.usuario = localStorage.getItem('nombre')!.toString() + ' ' + localStorage.getItem('primer_apellido')!.toString();
    } else {
      this.usuario = localStorage.getItem('nombre')!.toString() + ' ' + localStorage.getItem('primer_apellido')!.toString() + ' ' + localStorage.getItem('segundo_apellido')!.toString();
    }
  }

}
