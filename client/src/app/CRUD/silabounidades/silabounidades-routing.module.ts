import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilaboUnidadesComponent } from './silabounidades.component';

const routes: Routes = [
   { path: '', component: SilaboUnidadesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SilaboUnidadesRoutingModule { }
