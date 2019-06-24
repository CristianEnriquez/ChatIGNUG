import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DatosEstudianteRoutingModule } from './datosestudiante-routing.module';
import { DatosEstudianteComponent } from './datosestudiante.component';
import { DatosEstudianteService } from './datosestudiante.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DatosEstudianteRoutingModule
   ],
   providers: [DatosEstudianteService],
   declarations: [DatosEstudianteComponent],
})
export class DatosEstudianteModule { }
