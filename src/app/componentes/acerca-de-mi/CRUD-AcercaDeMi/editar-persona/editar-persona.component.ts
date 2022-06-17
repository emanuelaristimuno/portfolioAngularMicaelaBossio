import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  // id:any=0;
  personaActual: Persona={nombre:'', apellido:'', titulo:'', descripcion:'', image_perfil:'', banner:''};
  // personaActual: Persona | any=null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.personaService.traerPorId(id).subscribe(data=>{
      this.personaActual=data;
    });
  }

  guardar(){
    const id= this.activatedRoute.snapshot.params['id'];
    this.personaService.editarPersona(id, this.personaActual).subscribe(data=>{
      this.router.navigate(['/home']);
    })
  }

}
