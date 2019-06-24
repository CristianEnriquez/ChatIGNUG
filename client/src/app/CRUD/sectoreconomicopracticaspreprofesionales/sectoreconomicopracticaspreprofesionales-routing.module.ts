import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectorEconomicoPracticasPreprofesionalesComponent } from './sectoreconomicopracticaspreprofesionales.component';

const routes: Routes = [
   { path: '', component: SectorEconomicoPracticasPreprofesionalesComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SectorEconomicoPracticasPreprofesionalesRoutingModule { }
