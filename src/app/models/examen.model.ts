import { AlternativasModel } from './alternativas.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ExamenModel {
    id: String;
    alternativas: AlternativasModel;
    bimestre: Number;
    dificultad: Number;
    enuciaddo: String;
    grado: Number;
    respuesta: String;

    // tslint:disable-next-line: max-line-length
    constructor (key: String, bimestre: Number, dificultad: Number, enuciaddo: String, grado: Number, respuesta: String, alternativas: AlternativasModel) {
        this.id = key;
        this.bimestre = bimestre;
        this.dificultad = dificultad;
        this.enuciaddo = enuciaddo;
        this.grado = grado;
        this.respuesta = respuesta;
        this.alternativas = alternativas;
    }
}
