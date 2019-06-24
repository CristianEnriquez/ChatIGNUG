import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaEmpresaTrabajaComponent } from './areaempresatrabaja.component';

const routes: Routes = [
   { path: '', component: AreaEmpresaTrabajaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AreaEmpresaTrabajaRoutingModule { }
