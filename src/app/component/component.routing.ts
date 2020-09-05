import { Routes } from '@angular/router';

import { ExamenesComponent } from './examenes/examenes.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component'
import { PruebaComponent } from './prueba/prueba.component'

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
       {
        path: 'examenes',
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
        path: 'configuracion',
        component: ConfiguracionComponent,
        data: {
          title: 'Configuracion',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Configuracion' }
          ]
        }
      }, {
        path: 'pruebas',
        component: PruebaComponent,
        data: {
          title: 'Pruebas',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pruebas' }
          ]
        }
      },

    ]
  }
];
