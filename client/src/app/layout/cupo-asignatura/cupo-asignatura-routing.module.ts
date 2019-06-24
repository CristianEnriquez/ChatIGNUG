import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CupoAsignaturaComponent } from './cupo-asignatura.component';

const routes: Routes = [
    { path: '', component: CupoAsignaturaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CupoAsignaturaRoutingModule { }
