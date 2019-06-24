import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaAporteComponent } from './categoriaaporte.component';

const routes: Routes = [
   { path: '', component: CategoriaAporteComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CategoriaAporteRoutingModule { }
