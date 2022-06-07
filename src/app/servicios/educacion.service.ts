import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model'; 

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  url='http://localhost:8080/api/education/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + 'all');
  }

  public crearEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.url+'crear', educacion);
  }

  public traerPorId(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `traerporid/${id}`)
  }

  public editarEducacion(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.url+ `editar/${id}`, educacion);
  }

  public eliminarEducacion(id: number): Observable<any>{
    return this.http.delete<any>(this.url+ `borrar/${id}`);
  }
}
