import { AlternativasModel } from './alternativas.model';
import { Injectable } from '@angular/core';
import { PreguntaModel } from './pregunta.model';

@Injectable({
    providedIn: 'root'
  })

export class ExamenModel {
    id: String;
    idDocente: String;
    titulo: String;
    preguntas: String[];
    fecha: Date;

    constructor (key: String, idDocente: String, titulo: String, preguntas: String[], fecha: Date) {
        this.id = key;
        this.idDocente = idDocente;
        this.titulo = titulo;
        this.preguntas = preguntas;
        this.fecha = fecha;
    }

}
