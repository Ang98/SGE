import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocenteModel } from '../models/docente.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private url = 'https://sistema-de-examenes.web.app/api/docente';

  constructor(private http: HttpClient) {  }

  crearExamen = (docente: DocenteModel) => this.http.post(`${this.url}`, docente).pipe(map( (resp: any) => resp));

  getExamen = (id: String) =>  this.http.get(`${this.url}/id`);

  getExamenes = () => this.http.get(`${this.url}`).pipe( map(this.arrayCrearDocentes));

  borrarExamen = (id: string) => this.http.delete(`${this.url}/id`);

  actualizarExamen = (id: String, docente: DocenteModel) => this.http.put(`${this.url}/${id}`, docente);


  private arrayCrearDocentes = (docentesObject: any) => {
    const docentes: DocenteModel[] = [];

    if (docentesObject !== null) {  Object.keys(docentesObject).forEach( key => docentes.push(docentesObject[key])); }

    return docentes;
  }
}
