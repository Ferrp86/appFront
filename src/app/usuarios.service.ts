import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from './interface/evento.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;


  // arrEventos: Evento[];

  constructor(
    private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';

    // this.arrEventos = [];
  }

  registro(formValues: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues, httpOptions).toPromise();
  }

  login(body: { email: string, password: string }): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/login`, body, httpOptions).toPromise();
  }

// ESTO VA EN LOCALES SERVICE

  // AGREGAR EVENTO
  // agregarEvento(newEvento: any): void {
  //   if (localStorage.getItem('eventos') === null) {
  //     this.arrEventos.push(newEvento);
  //     localStorage.setItem('eventos', JSON.stringify(this.arrEventos));
  //   } else {
  //     this.arrEventos = JSON.parse(localStorage.getItem('eventos') || '');
  //     this.arrEventos.push(newEvento);
  //     localStorage.setItem('eventos', JSON.stringify(this.arrEventos))
  //   }

  //   this.arrEventos.push(newEvento);
  //   console.log(this.arrEvento);
  // }

  // TODOS LOS EVENTOS
  // getAllEventos(): Promise<any[]> {
  //   return new Promise((resolve, reject) => {
  //     resolve(JSON.parse(localStorage.getItem('eventos') || ''));
  //   })
  // }

}
