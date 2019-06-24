import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NivelTituloComponent } from './niveltitulo.component';

const routes: Routes = [
   { path: '', component: NivelTituloComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class NivelTituloRoutingModule { }
