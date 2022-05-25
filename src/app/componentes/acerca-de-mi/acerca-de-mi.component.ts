import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  persona: Persona = new Persona(" ", " ", " ", " ", " ", " ");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      console.log(data);
      this.persona=data;
    })
  }

  // miPortfolio:any; 
  
  // constructor(private datosAcercaDeMi:PortfolioService) { }
  // ngOnInit(): void {
  //   this.datosAcercaDeMi.obtenerDatos().subscribe(data => {
  //     console.log(data);
  //     this.miPortfolio=data;
  //   });
  // }
}


