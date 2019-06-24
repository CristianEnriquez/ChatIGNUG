import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AporteFinalComponent } from './aportefinal.component';

const routes: Routes = [
   { path: '', component: AporteFinalComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AporteFinalRoutingModule { }
