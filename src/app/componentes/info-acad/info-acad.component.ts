import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-info-acad',
  templateUrl: './info-acad.component.html',
  styleUrls: ['./info-acad.component.css']
})

export class InfoAcadComponent implements OnInit {
  // educacion: Educacion = new Educacion(" ", " ", " ");
  educacion:any;
    
  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {
      console.log(data);
      this.educacion=data;
    });
  }
}

