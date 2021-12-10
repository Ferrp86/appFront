import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private httpClient: HttpClient
  ) {
    // Aquí iría la URL de la API (DE EXPRESS)
    // this.baseUrl = 'http//' 
  }

  // getUsuario(){
  //   return this.httpClient
  //   .get(this.baseUrl)
  //   .toPromise();
  // }


  // registrarUsuario(body: Usuario) {
  //   return this.httpClient
  //     .post(`${this.baseUrl}/registro`, body)
  //     .toPromise();
  // }

  // login(body: { email: string, password: string }) {
  //   return this.httpClient
  //     .post(`${this.baseUrl}/login`, body)
  //     .toPromise();

  // }


}
