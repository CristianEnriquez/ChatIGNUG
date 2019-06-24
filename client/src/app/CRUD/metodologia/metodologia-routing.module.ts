import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodologiaComponent } from './metodologia.component';

const routes: Routes = [
   { path: '', component: MetodologiaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class MetodologiaRoutingModule { }
