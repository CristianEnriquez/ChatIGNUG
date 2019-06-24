import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PeriodoAcademicoRoutingModule } from './periodoacademico-routing.module';
import { PeriodoAcademicoComponent } from './periodoacademico.component';
import { PeriodoAcademicoService } from './periodoacademico.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PeriodoAcademicoRoutingModule
   ],
   providers: [PeriodoAcademicoService],
   declarations: [PeriodoAcademicoComponent],
})
export class PeriodoAcademicoModule { }
