import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidosActividadesComponent } from './contenidosactividades.component';

const routes: Routes = [
   { path: '', component: ContenidosActividadesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ContenidosActividadesRoutingModule { }
