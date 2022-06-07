import { Component, OnInit } from '@angular/core';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';

@Component({
  selector: 'app-skills-soft',
  templateUrl: './skills-soft.component.html',
  styleUrls: ['./skills-soft.component.css']
})

export class SkillsSoftComponent implements OnInit {

  softskills:any;

  constructor(private skillSoftService:SkillsSoftService) { }

  ngOnInit(): void {
    this.skillSoftService.getSkillSoft().subscribe(data=>{
      console.log(data);
      this.softskills=data;
    })
  }

  borrarSS(id: number){
    alert('Borrar id ' + id);
  }

}
