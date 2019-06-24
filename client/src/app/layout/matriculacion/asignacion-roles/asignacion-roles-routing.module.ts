import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionRolesComponent } from './asignacion-roles.component';

const routes: Routes = [
   { path: '', component: AsignacionRolesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsignacionRolesRoutingModule { }
