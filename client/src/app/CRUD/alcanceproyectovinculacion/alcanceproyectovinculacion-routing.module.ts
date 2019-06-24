import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlcanceProyectoVinculacionComponent } from './alcanceproyectovinculacion.component';

const routes: Routes = [
   { path: '', component: AlcanceProyectoVinculacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AlcanceProyectoVinculacionRoutingModule { }
