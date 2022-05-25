import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';  

@Injectable({
  providedIn: 'root'
})

export class SkillsSoftService {
  url='http://localhost:8080/api/';

  constructor(private http: HttpClient) { }
  public getSkillSoft(): Observable<Skill>{
    return this.http.get<Skill>(this.url + 'skill/query?tipo=soft');
  }}

