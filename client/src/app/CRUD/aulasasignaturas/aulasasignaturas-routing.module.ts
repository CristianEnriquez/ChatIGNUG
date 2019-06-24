import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasAsignaturasComponent } from './aulasasignaturas.component';

const routes: Routes = [
   { path: '', component: AulasAsignaturasComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AulasAsignaturasRoutingModule { }
