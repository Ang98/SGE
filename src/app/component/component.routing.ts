import { Routes } from '@angular/router';

import { ExamenesComponent } from './examenes/examenes.component';

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
      }
    ]
  }
];
