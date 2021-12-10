import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  // registrarUsuario(body: Usuario) {
  //   return this.httpClient
  //     .post(`${this.baseUrl}/registro`, body)
  //     .toPromise();
  // }

  login(body: { email: string, password: string }) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/login`, body, httpOptions).toPromise();
  }


}