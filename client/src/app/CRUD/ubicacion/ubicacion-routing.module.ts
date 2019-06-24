import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbicacionComponent } from './ubicacion.component';

const routes: Routes = [
   { path: '', component: UbicacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class UbicacionRoutingModule { }
