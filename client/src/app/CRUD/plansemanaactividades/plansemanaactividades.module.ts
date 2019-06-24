import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanSemanaActividadesRoutingModule } from './plansemanaactividades-routing.module';
import { PlanSemanaActividadesComponent } from './plansemanaactividades.component';
import { PlanSemanaActividadesService } from './plansemanaactividades.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PlanSemanaActividadesRoutingModule
   ],
   providers: [PlanSemanaActividadesService],
   declarations: [PlanSemanaActividadesComponent],
})
export class PlanSemanaActividadesModule { }
