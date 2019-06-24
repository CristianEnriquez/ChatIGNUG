import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoInstitucionPracticasPreprofesionalesComponent } from './tipoinstitucionpracticaspreprofesionales.component';

const routes: Routes = [
   { path: '', component: TipoInstitucionPracticasPreprofesionalesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoInstitucionPracticasPreprofesionalesRoutingModule { }
