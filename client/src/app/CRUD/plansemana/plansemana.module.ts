import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaRoutingModule } from './plansemana-routing.module';
import { PlanSemanaComponent } from './plansemana.component';
import { PlanSemanaService } from './plansemana.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaRoutingModule
   ],
   providers: [PlanSemanaService],
   declarations: [PlanSemanaComponent],
})
export class PlanSemanaModule { }
