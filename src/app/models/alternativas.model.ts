import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AlternativasModel {
    alternativa: String = '';

    constructor(alternativa: String) {
        this.alternativa = alternativa;
    }

}
