import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaTemaRoutingModule } from './plansemanatema-routing.module';
import { PlanSemanaTemaComponent } from './plansemanatema.component';
import { PlanSemanaTemaService } from './plansemanatema.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaTemaRoutingModule
   ],
   providers: [PlanSemanaTemaService],
   declarations: [PlanSemanaTemaComponent],
})
export class PlanSemanaTemaModule { }
