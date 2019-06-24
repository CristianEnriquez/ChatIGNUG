import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitucionComponent } from './institucion.component';

const routes: Routes = [
   { path: '', component: InstitucionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class InstitucionRoutingModule { }
