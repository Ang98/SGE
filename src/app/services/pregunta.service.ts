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

  getExamen = (id: String) =>  this.http.get(`${this.url}/id`);

  getExamenes = () => this.http.get(`${this.url}`).pipe( map(this.arrayCrearPreguntas));

  borrarExamen = (id: string) => this.http.delete(`${this.url}/id`);

  actualizarExamen = (id: String, examen: PreguntaModel) => this.http.put(`${this.url}/${id}`, examen);


  private arrayCrearPreguntas = (preguntasObject: any) => {
    const preguntas: PreguntaModel[] = [];

    if (preguntasObject !== null) {  Object.keys(preguntasObject).forEach( key => preguntas.push(preguntasObject[key])); }

    return preguntas;
  }
}
