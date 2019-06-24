import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalidadComponent } from './modalidad.component';

const routes: Routes = [
   { path: '', component: ModalidadComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ModalidadRoutingModule { }
