import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionAsignaturasCupoComponent } from './asignacion-asignaturas-cupo.component';

const routes: Routes = [
   { path: '', component: AsignacionAsignaturasCupoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsignacionAsignaturasCupoRoutingModule { }
