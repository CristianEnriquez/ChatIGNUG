import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosEstudianteComponent } from './datosestudiante.component';

const routes: Routes = [
   { path: '', component: DatosEstudianteComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DatosEstudianteRoutingModule { }
