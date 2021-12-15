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

  formulario: FormGroup;
  error: string;


  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
      ]),
      password: new FormControl('', [Validators.required,])
    });

    this.error = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = '';
    console.log(this.formulario.value);

    this.usuariosService.login(this.formulario.value)
      .then(response => {
        console.log(response);
        if (response.Error) {
          this.error = response.Error;
        } else {
          localStorage.setItem('user_token', response.token);
          this.router.navigate(['/perfil']);
        }
      })
      .catch(err => console.log(err));
  }

  checkError(controlName: string, error: string): boolean {
    return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  }
}
