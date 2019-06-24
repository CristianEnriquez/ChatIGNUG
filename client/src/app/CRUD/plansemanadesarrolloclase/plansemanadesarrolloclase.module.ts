import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaDesarrolloClaseRoutingModule } from './plansemanadesarrolloclase-routing.module';
import { PlanSemanaDesarrolloClaseComponent } from './plansemanadesarrolloclase.component';
import { PlanSemanaDesarrolloClaseService } from './plansemanadesarrolloclase.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaDesarrolloClaseRoutingModule
   ],
   providers: [PlanSemanaDesarrolloClaseService],
   declarations: [PlanSemanaDesarrolloClaseComponent],
})
export class PlanSemanaDesarrolloClaseModule { }
