import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculaAsignaturaComponent } from './matriculaasignatura.component';

const routes: Routes = [
   { path: '', component: MatriculaAsignaturaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class MatriculaAsignaturaRoutingModule { }
