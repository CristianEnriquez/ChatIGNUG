import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TituloComponent } from './titulo.component';

const routes: Routes = [
   { path: '', component: TituloComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TituloRoutingModule { }
