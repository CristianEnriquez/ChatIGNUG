import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilEgresoComponent } from './perfilegreso.component';

const routes: Routes = [
   { path: '', component: PerfilEgresoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PerfilEgresoRoutingModule { }
