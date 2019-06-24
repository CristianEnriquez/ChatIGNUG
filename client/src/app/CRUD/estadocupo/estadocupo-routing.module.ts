import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoCupoComponent } from './estadocupo.component';

const routes: Routes = [
   { path: '', component: EstadoCupoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstadoCupoRoutingModule { }
