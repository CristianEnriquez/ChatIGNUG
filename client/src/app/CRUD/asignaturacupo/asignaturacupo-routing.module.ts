import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaCupoComponent } from './asignaturacupo.component';

const routes: Routes = [
   { path: '', component: AsignaturaCupoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsignaturaCupoRoutingModule { }
