import { Component, OnInit, Input } from '@angular/core';
import { PreguntaModel } from '../../models/pregunta.model';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styles: [
  ]
})
export class PreguntaComponent implements OnInit {
  @Input() Preguntas: PreguntaModel[] = [];
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
