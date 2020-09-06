import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// import { ExamenesComponent } from './examenes.component';
import { RouterModule } from '@angular/router';
import { ExamenesRoutes } from './examenes.routing';
import { PreguntaComponent } from '../pregunta/pregunta.component';
@NgModule({
    imports: [RouterModule.forChild(ExamenesRoutes), NgbModule],
    exports: [],
    declarations: [],
    providers: [],
})

export class ExamenesModule { }
