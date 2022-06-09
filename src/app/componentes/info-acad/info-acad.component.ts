import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-info-acad',
  templateUrl: './info-acad.component.html',
  styleUrls: ['./info-acad.component.css']
})

export class InfoAcadComponent implements OnInit {
  // educacion: Educacion = new Educacion(" ", " ", " ");
  educacion: any;

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {
      console.log(data);
      this.educacion = data;
    });
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

