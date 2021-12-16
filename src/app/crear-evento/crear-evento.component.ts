import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalesService } from '../locales.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  newEvento: FormGroup;

  constructor( private localesService: LocalesService ) { 

    this.newEvento = new FormGroup ({
      nombre: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl (''), 
      localizacion: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')

    });

   }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.newEvento.value);
    this.localesService.agregarEvento(this.newEvento.value)
    
  }
}
