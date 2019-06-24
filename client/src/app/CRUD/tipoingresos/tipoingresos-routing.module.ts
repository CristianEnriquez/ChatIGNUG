import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoIngresosComponent } from './tipoingresos.component';

const routes: Routes = [
   { path: '', component: TipoIngresosComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoIngresosRoutingModule { }
