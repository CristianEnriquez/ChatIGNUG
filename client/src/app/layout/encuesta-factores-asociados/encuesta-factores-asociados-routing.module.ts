import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestaFactoresAsociadosComponent } from './encuesta-factores-asociados.component';

const routes: Routes = [
    { path: '', component: EncuestaFactoresAsociadosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EncuestaFactoresAsociadosRoutingModule { }
