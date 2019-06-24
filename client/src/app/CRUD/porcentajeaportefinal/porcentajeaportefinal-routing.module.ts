import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorcentajeAporteFinalComponent } from './porcentajeaportefinal.component';

const routes: Routes = [
   { path: '', component: PorcentajeAporteFinalComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PorcentajeAporteFinalRoutingModule { }
