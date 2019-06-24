import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoCarreraComponent } from './cargocarrera.component';

const routes: Routes = [
   { path: '', component: CargoCarreraComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CargoCarreraRoutingModule { }
