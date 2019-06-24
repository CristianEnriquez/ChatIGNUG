import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaMetodologiaComponent } from './plansemanametodologia.component';

const routes: Routes = [
   { path: '', component: PlanSemanaMetodologiaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaMetodologiaRoutingModule { }
