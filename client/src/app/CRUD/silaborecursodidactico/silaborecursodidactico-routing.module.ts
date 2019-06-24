import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilaboRecursoDidacticoComponent } from './silaborecursodidactico.component';

const routes: Routes = [
   { path: '', component: SilaboRecursoDidacticoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SilaboRecursoDidacticoRoutingModule { }
