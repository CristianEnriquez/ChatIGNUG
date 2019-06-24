import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { fechaEvaluacionesParcialesRoutingModule } from './fechaevaluacionesparciales-routing.module';
import { fechaEvaluacionesParcialesComponent } from './fechaevaluacionesparciales.component';
import { fechaEvaluacionesParcialesService } from './fechaevaluacionesparciales.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      fechaEvaluacionesParcialesRoutingModule
   ],
   providers: [fechaEvaluacionesParcialesService],
   declarations: [fechaEvaluacionesParcialesComponent],
})
export class fechaEvaluacionesParcialesModule { }
