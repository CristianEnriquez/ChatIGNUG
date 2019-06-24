import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienciaLaboralComponent } from './experiencialaboral.component';

const routes: Routes = [
   { path: '', component: ExperienciaLaboralComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ExperienciaLaboralRoutingModule { }
