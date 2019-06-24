import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodoAcademicoComponent } from './periodoacademico.component';

const routes: Routes = [
   { path: '', component: PeriodoAcademicoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PeriodoAcademicoRoutingModule { }
