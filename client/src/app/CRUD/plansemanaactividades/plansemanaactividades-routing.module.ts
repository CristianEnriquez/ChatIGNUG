import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaActividadesComponent } from './plansemanaactividades.component';

const routes: Routes = [
   { path: '', component: PlanSemanaActividadesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaActividadesRoutingModule { }
