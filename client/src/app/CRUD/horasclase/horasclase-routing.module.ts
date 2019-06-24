import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorasClaseComponent } from './horasclase.component';

const routes: Routes = [
   { path: '', component: HorasClaseComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class HorasClaseRoutingModule { }
