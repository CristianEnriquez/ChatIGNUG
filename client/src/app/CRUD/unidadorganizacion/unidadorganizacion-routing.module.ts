import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadOrganizacionComponent } from './unidadorganizacion.component';

const routes: Routes = [
   { path: '', component: UnidadOrganizacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class UnidadOrganizacionRoutingModule { }
