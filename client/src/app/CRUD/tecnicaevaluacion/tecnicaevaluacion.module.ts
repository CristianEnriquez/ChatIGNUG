import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TecnicaEvaluacionRoutingModule } from './tecnicaevaluacion-routing.module';
import { TecnicaEvaluacionComponent } from './tecnicaevaluacion.component';
import { TecnicaEvaluacionService } from './tecnicaevaluacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TecnicaEvaluacionRoutingModule
   ],
   providers: [TecnicaEvaluacionService],
   declarations: [TecnicaEvaluacionComponent],
})
export class TecnicaEvaluacionModule { }
