import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaEjeTransversalRoutingModule } from './plansemanaejetransversal-routing.module';
import { PlanSemanaEjeTransversalComponent } from './plansemanaejetransversal.component';
import { PlanSemanaEjeTransversalService } from './plansemanaejetransversal.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaEjeTransversalRoutingModule
   ],
   providers: [PlanSemanaEjeTransversalService],
   declarations: [PlanSemanaEjeTransversalComponent],
})
export class PlanSemanaEjeTransversalModule { }
