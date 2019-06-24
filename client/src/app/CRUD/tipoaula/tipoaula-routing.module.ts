import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoAulaComponent } from './tipoaula.component';

const routes: Routes = [
   { path: '', component: TipoAulaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoAulaRoutingModule { }
