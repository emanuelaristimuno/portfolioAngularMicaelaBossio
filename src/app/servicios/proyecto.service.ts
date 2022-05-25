import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model'; 

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  url='http://localhost:8080/api/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + 'all');
  }
}
