import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuariosService: UsuariosService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      primer_apellido: new FormControl('', [Validators.required]),
      segundo_apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      nombre_usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    })
  }

  ngOnInit(): void {
  }


  async onSubmit() {
    // const response = await this.usuariosService.registrarUsuario(this.formulario.value);
    console.log('envío de registro');

  }

}
