import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ExamenModel } from '../models/examen.model';


@Injectable({
  providedIn: 'root'
})

export class ExamenesServices {

  private url = 'https://sistema-de-examenes.web.app/api/pregunta';

  constructor(private http: HttpClient) {  }

  crearExamen = (examen: ExamenModel) => this.http.post(`${this.url}`, examen).pipe(map( (resp: any) => resp));

  getExamen = (id: String) =>  this.http.get(`${this.url}/id`);

  getExamenes = () => this.http.get(`${this.url}`).pipe( map(this.arrayCrearExamenes));

  borrarExamen = (id: string) => this.http.delete(`${this.url}/id`);

  actualizarExamen = (id: String, examen: ExamenModel) => this.http.put(`${this.url}/${id}`, examen);


  private arrayCrearExamenes = (examenesObject: any) => {
    const examen: ExamenModel[] = [];

    if (examenesObject !== null) {  Object.keys(examenesObject).forEach( key => examen.push(examenesObject[key])); }

    return examen;
  }
}
