import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoEducacionContinuaComponent } from './tipoeducacioncontinua.component';

const routes: Routes = [
   { path: '', component: TipoEducacionContinuaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoEducacionContinuaRoutingModule { }
