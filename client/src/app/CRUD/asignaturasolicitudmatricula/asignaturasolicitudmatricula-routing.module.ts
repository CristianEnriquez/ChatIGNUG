import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaSolicitudMatriculaComponent } from './asignaturasolicitudmatricula.component';

const routes: Routes = [
   { path: '', component: AsignaturaSolicitudMatriculaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsignaturaSolicitudMatriculaRoutingModule { }
