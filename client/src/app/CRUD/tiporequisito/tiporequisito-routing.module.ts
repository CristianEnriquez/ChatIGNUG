import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoRequisitoComponent } from './tiporequisito.component';

const routes: Routes = [
   { path: '', component: TipoRequisitoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoRequisitoRoutingModule { }
