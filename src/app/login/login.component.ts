import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario_usuario: FormGroup;
  formulario_local: FormGroup;
  error: string;
  isHide: boolean;


  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.formulario_usuario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
      ]),
      password: new FormControl('', [Validators.required,])
    });

    this.formulario_local = new FormGroup({
      usuario: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,])
    })

    this.error = '';
    this.isHide = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = '';
    console.log(this.formulario_usuario.value);

    this.usuariosService.login(this.formulario_usuario.value)
      .then(response => {
        console.log(response);
        if (response.Error) {
          this.error = response.Error;
        } else {
          console.log(response);
          localStorage.setItem('user_token', response.token);
          localStorage.setItem('username', response.username);
          this.router.navigate(['/perfil']);
        }
      })
      .catch(err => console.log(err));
  }

  changeForm() {
    this.isHide = !this.isHide
  }

  checkError(controlName: string, error: string): boolean {
    return this.formulario_usuario.get(controlName)!.hasError(error) && this.formulario_usuario.get(controlName)!.touched;
  }
}
