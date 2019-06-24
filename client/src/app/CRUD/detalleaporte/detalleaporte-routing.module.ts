import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleAporteComponent } from './detalleaporte.component';

const routes: Routes = [
   { path: '', component: DetalleAporteComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DetalleAporteRoutingModule { }
