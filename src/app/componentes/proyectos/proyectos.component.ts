import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  // proyecto: Proyecto = new Proyecto(" ", " ", " ", " ");

  proyectos: any;
  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {
      console.log(data);
      this.proyectos = data;
    })
  }

  borrarProyecto(id: number){
    this.proyectoService.eliminarProyecto(id).subscribe(data => {
      console.log("El ID: "+ id + ' fue eliminado');
      this.ngOnInit();
    })  }


}
