import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscapacidadComponent } from './discapacidad.component';

const routes: Routes = [
   { path: '', component: DiscapacidadComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DiscapacidadRoutingModule { }
