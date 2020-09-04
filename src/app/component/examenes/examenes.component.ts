import { Component, OnInit } from '@angular/core';
import { ExamenesServices } from '../../services/examenes.service';
import { ExamenModel } from '../../models/examen.model';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html'
})
export class ExamenesComponent implements OnInit {
  examenes: ExamenModel[];
  constructor( private examenesService: ExamenesServices) {
     this.examenes = [];
   }

  ngOnInit(): void {
    this.examenesService.getExamenes().subscribe(resp =>  this.examenes =  resp);
  }

}
