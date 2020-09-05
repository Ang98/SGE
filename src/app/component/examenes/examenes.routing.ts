import { Routes } from '@angular/router';

import { ExamenAgregarComponent } from './examen-agregar/examen-agregar.component';
import { ExamenDetalleComponent } from './examen-detalle/examen-detalle.component';

export const ExamenesRoutes: Routes = [
  {
    path: '',
    children: [
       {
        path: 'agregar',
        component: ExamenAgregarComponent,
      },{
        path: ':id',
        component: ExamenDetalleComponent,
      }
    ]
  }
];