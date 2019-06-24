import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaComponent } from './asistencia.component';
import { AsistenciaService } from './asistencia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsistenciaRoutingModule
   ],
   providers: [AsistenciaService],
   declarations: [AsistenciaComponent],
})
export class AsistenciaModule { }
