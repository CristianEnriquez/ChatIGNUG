import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducacionContinuaComponent } from './educacioncontinua.component';

const routes: Routes = [
   { path: '', component: EducacionContinuaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EducacionContinuaRoutingModule { }
