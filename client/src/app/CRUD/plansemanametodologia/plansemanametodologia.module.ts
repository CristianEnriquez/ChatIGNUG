import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaMetodologiaRoutingModule } from './plansemanametodologia-routing.module';
import { PlanSemanaMetodologiaComponent } from './plansemanametodologia.component';
import { PlanSemanaMetodologiaService } from './plansemanametodologia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaMetodologiaRoutingModule
   ],
   providers: [PlanSemanaMetodologiaService],
   declarations: [PlanSemanaMetodologiaComponent],
})
export class PlanSemanaMetodologiaModule { }
