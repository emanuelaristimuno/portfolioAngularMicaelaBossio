import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../model/explaboral.model'; 

@Injectable({
  providedIn: 'root'
})

export class ExplaboralService {
  url='http://localhost:8080/api/explaboral/';

  constructor(private http: HttpClient) { }

  public getExpLaboral(): Observable<ExpLaboral>{
    return this.http.get<ExpLaboral>(this.url + 'all');
  }

  public crearExpLaboral(expLab: ExpLaboral): Observable<any>{
    return this.http.post<any>(this.url+'crear', expLab);
  }

  public editarExpLaboral(id:number, expLab: ExpLaboral): Observable<any>{
    return this.http.put<any>(this.url+`edita/${id}`, expLab);
  } 

  public eliminarExpLaboral (id:number):Observable<any>{
    return this.http.delete<any>(this.url+`borrar/${id}`);
  }
}
