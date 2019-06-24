import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoInstitutoComponent } from './cargoinstituto.component';

const routes: Routes = [
   { path: '', component: CargoInstitutoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CargoInstitutoRoutingModule { }
