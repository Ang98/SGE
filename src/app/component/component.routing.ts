import { Routes } from '@angular/router';

import { ConfiguracionComponent } from './configuracion/configuracion.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'docente/perfil',
        loadChildren: () => import('../starter/starter.module').then(m => m.StarterModule)
      },
       {
        path: 'examenes',
        loadChildren: () => import('./examenes/examenes.module').then(m => m.ExamenesModule)
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
      },

    ]
  }
];