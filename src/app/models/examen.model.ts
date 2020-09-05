import { AlternativasModel } from './alternativas.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ExamenModel {
    id: String;
    idDocente: String;
    fecha: Date;

    constructor (key: String, idDocente: String, fecha: Date) {
        this.id = key;
        this.idDocente = idDocente;
        this.fecha = fecha;
    }
}
