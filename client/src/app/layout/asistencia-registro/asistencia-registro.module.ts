import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsistenciaRegistroRoutingModule } from './asistencia-registro-routing.module';
import { AsistenciaRegistroComponent } from './asistencia-registro.component';
import { AsistenciaRegistroService } from './asistencia-registro.service';
import { AsignaturaService } from '../../CRUD/asignatura/asignatura.service';


@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsistenciaRegistroRoutingModule
   ],
   providers: [AsistenciaRegistroService, AsignaturaService],
   declarations: [AsistenciaRegistroComponent],
})
export class AsistenciaRegistroModule { }
