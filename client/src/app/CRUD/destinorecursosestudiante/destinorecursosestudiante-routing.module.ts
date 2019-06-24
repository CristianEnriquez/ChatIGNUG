import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinoRecursosEstudianteComponent } from './destinorecursosestudiante.component';

const routes: Routes = [
   { path: '', component: DestinoRecursosEstudianteComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DestinoRecursosEstudianteRoutingModule { }
