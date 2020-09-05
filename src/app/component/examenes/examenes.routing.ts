import { Routes } from '@angular/router';

import { ExamenAgregarComponent } from './examen-agregar/examen-agregar.component';
import { ExamenDetalleComponent } from './examen-detalle/examen-detalle.component';
import { ExamenesComponent } from './examenes.component';

export const ExamenesRoutes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            component: ExamenesComponent,
            data: {
              title: 'Examenes',
              urls: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'ngComponent' },
                { title: 'Examenes' }
              ]
            }
        }, {
            path: 'agregar',
            component: ExamenAgregarComponent,
            data: {
                title: 'Agregar examenes',
                urls: [
                  { title: 'Dashboard', url: '/dashboard' },
                  { title: 'ngComponent' },
                  { title: 'Agregar' }
                ]
              }
        }, {
            path: ':id',
            component: ExamenDetalleComponent,
            data: {
                title: 'Detalles de Exemen',
                urls: [
                  { title: 'Dashboard', url: '/dashboard' },
                  { title: 'ngComponent' },
                  { title: 'Id' }
                ]
              }
        }
    ]
  }
];