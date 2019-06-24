import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfermedadComponent } from './enfermedad.component';

const routes: Routes = [
   { path: '', component: EnfermedadComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EnfermedadRoutingModule { }
