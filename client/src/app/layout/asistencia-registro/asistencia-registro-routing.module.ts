import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaRegistroComponent } from './asistencia-registro.component';

const routes: Routes = [
   { path: '', component: AsistenciaRegistroComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsistenciaRegistroRoutingModule { }
