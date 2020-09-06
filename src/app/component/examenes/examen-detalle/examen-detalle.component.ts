import { Component, OnInit, ɵConsole } from '@angular/core';
import { ExamenModel } from '../../../models/examen.model';
import { ExamenesServices } from '../../../services/examenes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PreguntaModel } from '../../../models/pregunta.model';
import { PreguntasServices } from '../../../services/pregunta.service';

@Component({
  selector: 'app-examen-detalle',
  templateUrl: './examen-detalle.component.html',
  styles: [
  ]
})
export class ExamenDetalleComponent implements OnInit {
  examen: any;
  
  preguntas:  PreguntaModel[] = [];
  id: String = '';
  cargando: boolean = false;
  cargandoPreguntas: Boolean = true;
  cargandoExamen: Boolean = true;
  constructor(private examenesServices: ExamenesServices, private preguntasServices: PreguntasServices, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    // this.route.params.subscribe(resp => this.id = resp.id);
    // this.examenesServices.getExamen(this.id).subscribe( (resp) => {
    //   this.examen = resp;
    //   console.log(this.cargandoExamen);
    //   this.cargandoExamen = false;
    //   console.log(this.cargandoExamen);
    //   this.preguntas =  this.obtenerPreguntas(this.examen.preguntas);
    // });
  }

  private obtenerPreguntas =  (idPreguntas: String[]) => {
    const preguntas: PreguntaModel[] = [];
    console.log(idPreguntas);
    Object.keys(idPreguntas).forEach( (id: any) => {
        this.preguntasServices.getPregunta(idPreguntas[id]).subscribe(resp => {
          preguntas.push(resp);
      });
      this.cargandoPreguntas  = false;
    });
    return preguntas;
  }

}
