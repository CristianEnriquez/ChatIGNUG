import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoPerfilComponent } from './fotoperfil.component';

const routes: Routes = [
   { path: '', component: FotoPerfilComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class FotoPerfilRoutingModule { }
