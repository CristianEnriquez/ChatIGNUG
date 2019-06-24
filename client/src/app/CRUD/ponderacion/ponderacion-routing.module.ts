import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PonderacionComponent } from './ponderacion.component';

const routes: Routes = [
   { path: '', component: PonderacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PonderacionRoutingModule { }
