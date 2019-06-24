import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaComponent } from './asignatura.component';

const routes: Routes = [
   { path: '', component: AsignaturaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsignaturaRoutingModule { }
