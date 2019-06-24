import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudMatriculaComponent } from './solicitudmatricula.component';

const routes: Routes = [
   { path: '', component: SolicitudMatriculaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SolicitudMatriculaRoutingModule { }
