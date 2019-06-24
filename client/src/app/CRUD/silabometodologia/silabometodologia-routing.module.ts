import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilaboMetodologiaComponent } from './silabometodologia.component';

const routes: Routes = [
   { path: '', component: SilaboMetodologiaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SilaboMetodologiaRoutingModule { }
