import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fechaEvaluacionesParcialesComponent } from './fechaevaluacionesparciales.component';

const routes: Routes = [
   { path: '', component: fechaEvaluacionesParcialesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class fechaEvaluacionesParcialesRoutingModule { }
