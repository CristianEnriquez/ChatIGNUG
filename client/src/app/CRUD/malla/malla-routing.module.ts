import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MallaComponent } from './malla.component';

const routes: Routes = [
   { path: '', component: MallaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class MallaRoutingModule { }
