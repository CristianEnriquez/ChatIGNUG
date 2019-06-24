import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSemanaAplicacionComponent } from './plansemanaaplicacion.component';

const routes: Routes = [
   { path: '', component: PlanSemanaAplicacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PlanSemanaAplicacionRoutingModule { }
