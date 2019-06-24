import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorasClaseDiaComponent } from './horasclasedia.component';

const routes: Routes = [
   { path: '', component: HorasClaseDiaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class HorasClaseDiaRoutingModule { }
