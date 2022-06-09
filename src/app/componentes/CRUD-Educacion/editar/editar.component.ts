import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id?:number=0;
  educacion: Educacion = {id:0, nivelInstitucion:'', fecha:'', titulo:''};

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.traerPorId(id).subscribe(data=>{
      this.educacion=data;
      // this.router.navigate(['/home'])
    });
  }

  editar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.editarEducacion(id, this.educacion).subscribe(data => {
      this.educacion = data;
      this.router.navigate(['/home']);
    })

  }
}
