import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilaboComponent } from './silabo.component';

const routes: Routes = [
   { path: '', component: SilaboComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SilaboRoutingModule { }
