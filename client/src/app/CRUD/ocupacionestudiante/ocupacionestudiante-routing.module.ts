import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OcupacionEstudianteComponent } from './ocupacionestudiante.component';

const routes: Routes = [
   { path: '', component: OcupacionEstudianteComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class OcupacionEstudianteRoutingModule { }
