import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParcialComponent } from './parcial.component';

const routes: Routes = [
   { path: '', component: ParcialComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ParcialRoutingModule { }
