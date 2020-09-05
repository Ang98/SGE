import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ExamenesComponent } from './examenes.component';
import { RouterModule } from '@angular/router';
import { ExamenesRoutes } from './examenes.routing';

@NgModule({
    imports: [RouterModule.forChild(ExamenesRoutes), NgbModule],
    exports: [],
    declarations: [ExamenesComponent],
    providers: [],
})

export class ExamenesModule { }
