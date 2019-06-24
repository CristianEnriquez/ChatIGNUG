import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilaboResultadosComponent } from './silaboresultados.component';

const routes: Routes = [
   { path: '', component: SilaboResultadosComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SilaboResultadosRoutingModule { }
