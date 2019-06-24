import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JornadaCarreraComponent } from './jornadacarrera.component';

const routes: Routes = [
   { path: '', component: JornadaCarreraComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class JornadaCarreraRoutingModule { }
