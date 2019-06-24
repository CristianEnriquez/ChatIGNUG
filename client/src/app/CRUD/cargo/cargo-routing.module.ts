import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoComponent } from './cargo.component';

const routes: Routes = [
   { path: '', component: CargoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CargoRoutingModule { }
