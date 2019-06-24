import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaObjetivoComponent } from './plansemanaobjetivo.component';

const routes: Routes = [
   { path: '', component: PlanSemanaObjetivoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaObjetivoRoutingModule { }
