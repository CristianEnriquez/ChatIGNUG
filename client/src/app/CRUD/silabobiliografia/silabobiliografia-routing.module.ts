import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilaboBiliografiaComponent } from './silabobiliografia.component';

const routes: Routes = [
   { path: '', component: SilaboBiliografiaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SilaboBiliografiaRoutingModule { }
