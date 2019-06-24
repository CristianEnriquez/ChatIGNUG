import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoBachilleratoComponent } from './tipobachillerato.component';

const routes: Routes = [
   { path: '', component: TipoBachilleratoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoBachilleratoRoutingModule { }
