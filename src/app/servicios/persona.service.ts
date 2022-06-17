import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='http://localhost:8080/api/persona/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.url + 'traer');
  }

  public traerPorId(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.url + `traerporid/${id}`)
  }

  public editarPersona(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.url+  `editar/${id}`, persona);
  }
}
