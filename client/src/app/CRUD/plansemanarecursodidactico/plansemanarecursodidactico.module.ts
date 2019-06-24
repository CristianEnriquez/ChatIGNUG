import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaRecursoDidacticoRoutingModule } from './plansemanarecursodidactico-routing.module';
import { PlanSemanaRecursoDidacticoComponent } from './plansemanarecursodidactico.component';
import { PlanSemanaRecursoDidacticoService } from './plansemanarecursodidactico.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaRecursoDidacticoRoutingModule
   ],
   providers: [PlanSemanaRecursoDidacticoService],
   declarations: [PlanSemanaRecursoDidacticoComponent],
})
export class PlanSemanaRecursoDidacticoModule { }
