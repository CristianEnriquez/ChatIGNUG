import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaPrerrequisitosRoutingModule } from './plansemanaprerrequisitos-routing.module';
import { PlanSemanaPrerrequisitosComponent } from './plansemanaprerrequisitos.component';
import { PlanSemanaPrerrequisitosService } from './plansemanaprerrequisitos.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaPrerrequisitosRoutingModule
   ],
   providers: [PlanSemanaPrerrequisitosService],
   declarations: [PlanSemanaPrerrequisitosComponent],
})
export class PlanSemanaPrerrequisitosModule { }
