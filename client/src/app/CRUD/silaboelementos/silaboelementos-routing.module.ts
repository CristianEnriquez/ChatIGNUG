import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilaboElementosComponent } from './silaboelementos.component';

const routes: Routes = [
   { path: '', component: SilaboElementosComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SilaboElementosRoutingModule { }
