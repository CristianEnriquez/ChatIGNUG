import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisitoComponent } from './requisito.component';

const routes: Routes = [
   { path: '', component: RequisitoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RequisitoRoutingModule { }
