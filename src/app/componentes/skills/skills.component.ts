import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  hardskills:any;

  constructor(private skillService:SkillsService) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data=>{
      console.log(data);
      this.hardskills=data;
    })
  }

  borrarHS(id: number){
    alert('Borrar id ' + id);
  }

}
