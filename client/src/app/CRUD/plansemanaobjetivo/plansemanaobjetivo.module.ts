import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaObjetivoRoutingModule } from './plansemanaobjetivo-routing.module';
import { PlanSemanaObjetivoComponent } from './plansemanaobjetivo.component';
import { PlanSemanaObjetivoService } from './plansemanaobjetivo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaObjetivoRoutingModule
   ],
   providers: [PlanSemanaObjetivoService],
   declarations: [PlanSemanaObjetivoComponent],
})
export class PlanSemanaObjetivoModule { }
