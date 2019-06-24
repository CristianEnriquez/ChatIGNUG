import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutoComponent } from './instituto.component';

const routes: Routes = [
   { path: '', component: InstitutoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class InstitutoRoutingModule { }
