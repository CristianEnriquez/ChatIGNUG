import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './estudiante.component';

const routes: Routes = [
   { path: '', component: EstudianteComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstudianteRoutingModule { }
