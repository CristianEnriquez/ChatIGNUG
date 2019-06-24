import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaNotaComponent } from './categorianota.component';

const routes: Routes = [
   { path: '', component: CategoriaNotaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CategoriaNotaRoutingModule { }
