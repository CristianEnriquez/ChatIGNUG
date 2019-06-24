import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolSecundarioComponent } from './rolsecundario.component';

const routes: Routes = [
   { path: '', component: RolSecundarioComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RolSecundarioRoutingModule { }
