import { Component, OnInit, Input } from '@angular/core';
import { ExamenModel } from '../../models/examen.model';
import { ExamenesServices } from '../../services/examenes.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styles: [
  ]
})
export class ExamenComponent implements OnInit {
  examen: ExamenModel;
  @Input() id: String;

  constructor(private examenDervices: ExamenesServices) { }

  ngOnInit(): void {
    this.examen = this.examenDervices.getExamen(this.id);
  }

}
