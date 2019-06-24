import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecnicaEvaluacionComponent } from './tecnicaevaluacion.component';

const routes: Routes = [
   { path: '', component: TecnicaEvaluacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TecnicaEvaluacionRoutingModule { }
