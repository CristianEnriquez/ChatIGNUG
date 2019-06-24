import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OcupacionComponent } from './ocupacion.component';

const routes: Routes = [
   { path: '', component: OcupacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class OcupacionRoutingModule { }
