import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoMatriculaComponent } from './tipomatricula.component';

const routes: Routes = [
   { path: '', component: TipoMatriculaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoMatriculaRoutingModule { }
