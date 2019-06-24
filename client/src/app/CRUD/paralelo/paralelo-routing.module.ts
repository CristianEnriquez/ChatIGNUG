import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParaleloComponent } from './paralelo.component';

const routes: Routes = [
   { path: '', component: ParaleloComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ParaleloRoutingModule { }
