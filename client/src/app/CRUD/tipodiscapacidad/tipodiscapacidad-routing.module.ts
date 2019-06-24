import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDiscapacidadComponent } from './tipodiscapacidad.component';

const routes: Routes = [
   { path: '', component: TipoDiscapacidadComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoDiscapacidadRoutingModule { }
