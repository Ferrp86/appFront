import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from './interface/evento.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  private baseUrl: string;

  arrEventos: any[];

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/locales';

    this.arrEventos = [];
  }

  login(localForm: any): Promise<any> {
    console.log(localForm);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/login`, localForm, httpOptions).toPromise();
  }

  registro(formValues: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues, httpOptions).toPromise();
  }





  // AGREGAR EVENTO
  agregarEvento(newEvento: any): void {
    if (localStorage.getItem('eventos') === null) {
      this.arrEventos.push(newEvento);
      localStorage.setItem('eventos', JSON.stringify(this.arrEventos));
    } else {
      this.arrEventos = JSON.parse(localStorage.getItem('eventos') || '');
      this.arrEventos.push(newEvento);
      localStorage.setItem('eventos', JSON.stringify(this.arrEventos))
    }

    // this.arrEventos.push(newEvento);
    console.log(this.arrEventos);
  }

  // TODOS LOS EVENTOS
  getAllEventos(): Promise<Evento[]> {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem('eventos') || ''));
    })
  }


}
