import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaComponent } from './plansemana.component';

const routes: Routes = [
   { path: '', component: PlanSemanaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaRoutingModule { }
