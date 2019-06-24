import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoInstitucionProcedenciaComponent } from './tipoinstitucionprocedencia.component';

const routes: Routes = [
   { path: '', component: TipoInstitucionProcedenciaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoInstitucionProcedenciaRoutingModule { }
