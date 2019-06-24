import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaSemanaComponent } from './diasemana.component';

const routes: Routes = [
   { path: '', component: DiaSemanaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DiaSemanaRoutingModule { }
