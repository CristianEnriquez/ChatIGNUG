import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoSolicitudComponent } from './estadosolicitud.component';

const routes: Routes = [
   { path: '', component: EstadoSolicitudComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstadoSolicitudRoutingModule { }
