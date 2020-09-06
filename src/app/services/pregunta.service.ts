import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PreguntaModel } from '../models/pregunta.model';


@Injectable({
  providedIn: 'root'
})

export class PreguntasServices {

  private url = 'https://sistema-de-examenes.web.app/api/pregunta';

  constructor(private http: HttpClient) {  }

  crearPregunta = (pregunta: PreguntaModel) => this.http.post(`${this.url}`, pregunta).pipe(map( (resp: any) => resp));

  getPregunta = (id: String) =>  this.http.get(`${this.url}/${id}`).pipe(map(this.crearPreguntaModel));

  getPreguntas = () => this.http.get(`${this.url}`).pipe( map(this.arrayCrearPreguntas));

  borrarExamen = (id: string) => this.http.delete(`${this.url}/${id}`);

  actualizarExamen = (id: String, examen: PreguntaModel) => this.http.put(`${this.url}/${id}`, examen);


  private arrayCrearPreguntas = (preguntasObject: any) => {
    const preguntas: PreguntaModel[] = [];

    if (preguntasObject !== null) {  Object.keys(preguntasObject).forEach( key => {
        const pregunta: PreguntaModel = preguntasObject[key];
        pregunta.id = key;
        preguntas.push(pregunta);
      });
    }
    console.log(preguntas);

    return preguntas;
  }

  private crearPreguntaModel = ( examenObject: any) => {
    const examen: PreguntaModel = examenObject;
    return examen;
  }
}
