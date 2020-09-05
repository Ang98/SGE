import { Component, OnInit } from '@angular/core';
import { ExamenesServices } from '../../services/examenes.service';
import { ExamenModel } from '../../models/examen.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html'
})
export class ExamenesComponent implements OnInit {
  examenes: ExamenModel[];
  constructor( private examenesService: ExamenesServices, private router: Router) {
     this.examenes = [];
   }

  ngOnInit(): void {
    this.examenesService.getExamenes().subscribe(resp =>  {this.examenes =  resp; console.log(this.examenes[0])});
  }

  mostrarRuta(path: string, id: string){
    console.log(`${path}/${id}`);
    this.router.navigateByUrl('id');
  }

}
