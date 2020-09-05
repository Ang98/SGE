import { AlternativasModel } from './alternativas.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class DocenteModel {
    id: String;
    nombre: String;
    correo: String;
    contraseña: String;

    constructor (key: String, nombre: String, correo: String, contraseña: String) {
        this.id = key;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }
}
