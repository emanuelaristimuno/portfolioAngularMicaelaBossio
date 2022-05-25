import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  // proyecto: Proyecto = new Proyecto(" ", " ", " ", " ");

  proyectos: any;
  constructor(private educacionProyectos: ProyectoService) { }

  ngOnInit(): void {
    this.educacionProyectos.getProyecto().subscribe(data => {
      console.log(data);
      this.proyectos = data;
    })
  }

}
