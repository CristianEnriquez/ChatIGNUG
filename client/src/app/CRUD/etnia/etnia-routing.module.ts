import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtniaComponent } from './etnia.component';

const routes: Routes = [
   { path: '', component: EtniaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EtniaRoutingModule { }
