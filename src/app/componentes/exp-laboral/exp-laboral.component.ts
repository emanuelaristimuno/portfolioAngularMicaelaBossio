import { Component, OnInit } from '@angular/core';
import { ExplaboralService } from 'src/app/servicios/explaboral.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})

export class ExpLaboralComponent implements OnInit {
    // expLaboral: ExpLaboral = new ExpLaboral(" ", " ", " ");

  expLaboral:any;

  constructor(private expLaboralService:ExplaboralService) { }

  ngOnInit(): void {
    this.expLaboralService.getExpLaboral().subscribe(data=>{
      console.log(data);
      this.expLaboral=data;
    });
  }

}
