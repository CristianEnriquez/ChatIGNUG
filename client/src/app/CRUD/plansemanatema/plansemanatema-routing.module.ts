import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaTemaComponent } from './plansemanatema.component';

const routes: Routes = [
   { path: '', component: PlanSemanaTemaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaTemaRoutingModule { }
