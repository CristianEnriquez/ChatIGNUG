import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNotasComponent } from './detallenotas.component';

const routes: Routes = [
   { path: '', component: DetalleNotasComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DetalleNotasRoutingModule { }
