import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AportesComponent } from './aportes.component';

const routes: Routes = [
   { path: '', component: AportesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AportesRoutingModule { }
