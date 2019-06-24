import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaEjeTransversalComponent } from './plansemanaejetransversal.component';

const routes: Routes = [
   { path: '', component: PlanSemanaEjeTransversalComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaEjeTransversalRoutingModule { }
