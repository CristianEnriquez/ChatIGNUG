import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelacionPerfilResultadoComponent } from './relacionperfilresultado.component';

const routes: Routes = [
   { path: '', component: RelacionPerfilResultadoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RelacionPerfilResultadoRoutingModule { }
