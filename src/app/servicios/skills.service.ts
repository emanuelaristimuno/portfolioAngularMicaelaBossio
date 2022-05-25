import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';  

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  url='http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill>{
    return this.http.get<Skill>(this.url + 'skill/query?tipo=hard');
  }}
