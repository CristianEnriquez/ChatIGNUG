import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignacionMateriasComponent } from './asignacion-materias.component';

const routes: Routes = [
    { path: '', component: AsignacionMateriasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AsignacionMateriasRoutingModule { }
