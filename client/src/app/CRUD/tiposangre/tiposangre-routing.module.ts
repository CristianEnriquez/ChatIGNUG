import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoSangreComponent } from './tiposangre.component';

const routes: Routes = [
   { path: '', component: TipoSangreComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoSangreRoutingModule { }
