import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaSubTemaRoutingModule } from './plansemanasubtema-routing.module';
import { PlanSemanaSubTemaComponent } from './plansemanasubtema.component';
import { PlanSemanaSubTemaService } from './plansemanasubtema.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaSubTemaRoutingModule
   ],
   providers: [PlanSemanaSubTemaService],
   declarations: [PlanSemanaSubTemaComponent],
})
export class PlanSemanaSubTemaModule { }
