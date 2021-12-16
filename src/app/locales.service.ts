import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/locales';
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

}
