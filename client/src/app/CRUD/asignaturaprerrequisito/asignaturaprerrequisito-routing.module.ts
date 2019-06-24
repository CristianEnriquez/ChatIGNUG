import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaPrerrequisitoComponent } from './asignaturaprerrequisito.component';

const routes: Routes = [
   { path: '', component: AsignaturaPrerrequisitoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsignaturaPrerrequisitoRoutingModule { }
