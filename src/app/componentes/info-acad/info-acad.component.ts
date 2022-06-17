import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-info-acad',
  templateUrl: './info-acad.component.html',
  styleUrls: ['./info-acad.component.css']
})

export class InfoAcadComponent implements OnInit {
  educacion: Educacion | any = new Educacion(" ", " ", " ");

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.educacion = data;
    })
  }

  borrar(id: number) {
    this.educacionService.eliminarEducacion(id).subscribe(data => {
      console.log("El ID: "+ id + ' fue eliminado');
      this.cargarEducacion();
    })
  }
}

