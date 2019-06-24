import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjeTransversalComponent } from './ejetransversal.component';

const routes: Routes = [
   { path: '', component: EjeTransversalComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EjeTransversalRoutingModule { }
