import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaCorrequisitoComponent } from './asignaturacorrequisito.component';

const routes: Routes = [
   { path: '', component: AsignaturaCorrequisitoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AsignaturaCorrequisitoRoutingModule { }
