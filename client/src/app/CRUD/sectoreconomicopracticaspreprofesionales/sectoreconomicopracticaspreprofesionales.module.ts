import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SectorEconomicoPracticasPreprofesionalesRoutingModule } from './sectoreconomicopracticaspreprofesionales-routing.module';
import { SectorEconomicoPracticasPreprofesionalesComponent } from './sectoreconomicopracticaspreprofesionales.component';
import { SectorEconomicoPracticasPreprofesionalesService } from './sectoreconomicopracticaspreprofesionales.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SectorEconomicoPracticasPreprofesionalesRoutingModule
   ],
   providers: [SectorEconomicoPracticasPreprofesionalesService],
   declarations: [SectorEconomicoPracticasPreprofesionalesComponent],
})
export class SectorEconomicoPracticasPreprofesionalesModule { }
