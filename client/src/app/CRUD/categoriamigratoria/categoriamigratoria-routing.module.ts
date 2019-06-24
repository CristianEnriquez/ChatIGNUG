import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaMigratoriaComponent } from './categoriamigratoria.component';

const routes: Routes = [
   { path: '', component: CategoriaMigratoriaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CategoriaMigratoriaRoutingModule { }
