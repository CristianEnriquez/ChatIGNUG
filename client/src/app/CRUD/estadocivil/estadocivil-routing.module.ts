import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoCivilComponent } from './estadocivil.component';

const routes: Routes = [
   { path: '', component: EstadoCivilComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstadoCivilRoutingModule { }
