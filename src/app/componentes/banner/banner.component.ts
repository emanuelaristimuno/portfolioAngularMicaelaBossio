import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner: Persona = new Persona(" ", " ", " ", " ", " ", " ");

  constructor(public personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      console.log(data);
      this.banner=data;
    });
  }

  cargarPersona(): void{
    this.personaService.getPersona().subscribe(data=>{
      this.banner=data;
    })
  }

}
