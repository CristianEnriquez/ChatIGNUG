import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursosDidacticosComponent } from './recursosdidacticos.component';

const routes: Routes = [
   { path: '', component: RecursosDidacticosComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RecursosDidacticosRoutingModule { }
