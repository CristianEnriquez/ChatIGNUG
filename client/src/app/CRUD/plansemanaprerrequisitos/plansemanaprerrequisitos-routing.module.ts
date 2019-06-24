import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaPrerrequisitosComponent } from './plansemanaprerrequisitos.component';

const routes: Routes = [
   { path: '', component: PlanSemanaPrerrequisitosComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaPrerrequisitosRoutingModule { }
