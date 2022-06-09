import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  hardskills: any;

  constructor(private skillService: SkillsService, private router: Router) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => {
      console.log(data);
      this.hardskills = data;
    });
    this.cargarHardSkill();
  }

  cargarHardSkill(): void {
    this.skillService.getSkill().subscribe(data => {
      this.hardskills = data;
    })
  }

  borrarHS(id: number) {
    this.skillService.eliminarHardSkill(id).subscribe(data => {
      console.log("El ID: "+ id + ' fue eliminado');
      this.cargarHardSkill();
    })
  }
}
