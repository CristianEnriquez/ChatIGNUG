import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaTecnicaEvaluacionComponent } from './plansemanatecnicaevaluacion.component';

const routes: Routes = [
   { path: '', component: PlanSemanaTecnicaEvaluacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaTecnicaEvaluacionRoutingModule { }
