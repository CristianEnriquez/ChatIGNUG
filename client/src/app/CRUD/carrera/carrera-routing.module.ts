import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreraComponent } from './carrera.component';

const routes: Routes = [
   { path: '', component: CarreraComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CarreraRoutingModule { }
