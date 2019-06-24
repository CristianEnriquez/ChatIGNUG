import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaComponent } from './aula.component';

const routes: Routes = [
   { path: '', component: AulaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AulaRoutingModule { }
