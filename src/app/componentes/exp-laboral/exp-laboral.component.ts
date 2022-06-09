import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExplaboralService } from 'src/app/servicios/explaboral.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})

export class ExpLaboralComponent implements OnInit {
  // expLaboral: ExpLaboral = new ExpLaboral(" ", " ", " ");

  expLaboral: any;

  constructor(private expLaboralService: ExplaboralService, private router: Router) { }

  ngOnInit(): void {
    this.expLaboralService.getExpLaboral().subscribe(data => {
      console.log(data);
      this.expLaboral = data;
    });

    this.cargarExpLaboral();
  }

  cargarExpLaboral():void{
    this.expLaboralService.getExpLaboral().subscribe(data=>{
      this.expLaboral=data;
    })
  }

  borrarEL(id: number) {
    this.expLaboralService.eliminarExpLaboral(id).subscribe(data => {
      console.log(data + 'Eliminado');
      this.cargarExpLaboral();
    })
  }

}
