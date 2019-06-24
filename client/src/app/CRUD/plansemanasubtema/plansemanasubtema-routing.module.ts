import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaSubTemaComponent } from './plansemanasubtema.component';

const routes: Routes = [
   { path: '', component: PlanSemanaSubTemaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaSubTemaRoutingModule { }
