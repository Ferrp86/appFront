import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged: boolean;
  usuario: string;

  constructor(private router: Router, private usuariosService: UsuariosService) {
    this.isLogged = false;
    this.usuario = '';
  }

  ngOnInit(): void { }

  ngDoCheck() {
    if (localStorage.getItem('user_token')) {
      this.isLogged = true;
      this.usuario = localStorage.getItem('username')!.toString();
    } else {
      this.isLogged = false;
    }
  }

  clickLogout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('username');
    this.router.navigate(['/home']);
  }

}
