import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaAplicacionRoutingModule } from './plansemanaaplicacion-routing.module';
import { PlanSemanaAplicacionComponent } from './plansemanaaplicacion.component';
import { PlanSemanaAplicacionService } from './plansemanaaplicacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaAplicacionRoutingModule
   ],
   providers: [PlanSemanaAplicacionService],
   declarations: [PlanSemanaAplicacionComponent],
})
export class PlanSemanaAplicacionModule { }
