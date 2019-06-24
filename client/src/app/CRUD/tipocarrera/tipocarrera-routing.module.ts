import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoCarreraComponent } from './tipocarrera.component';

const routes: Routes = [
   { path: '', component: TipoCarreraComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoCarreraRoutingModule { }
