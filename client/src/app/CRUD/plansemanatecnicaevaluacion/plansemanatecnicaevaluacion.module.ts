import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaTecnicaEvaluacionRoutingModule } from './plansemanatecnicaevaluacion-routing.module';
import { PlanSemanaTecnicaEvaluacionComponent } from './plansemanatecnicaevaluacion.component';
import { PlanSemanaTecnicaEvaluacionService } from './plansemanatecnicaevaluacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaTecnicaEvaluacionRoutingModule
   ],
   providers: [PlanSemanaTecnicaEvaluacionService],
   declarations: [PlanSemanaTecnicaEvaluacionComponent],
})
export class PlanSemanaTecnicaEvaluacionModule { }
