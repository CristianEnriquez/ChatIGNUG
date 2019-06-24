import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreraInstitutoComponent } from './carrerainstituto.component';

const routes: Routes = [
   { path: '', component: CarreraInstitutoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CarreraInstitutoRoutingModule { }
