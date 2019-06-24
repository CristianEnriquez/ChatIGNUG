import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsignacionAsignaturasCupoRoutingModule } from './asignacion-asignaturas-cupo-routing.module';
import { AsignacionAsignaturasCupoComponent } from './asignacion-asignaturas-cupo.component';
import { AsignacionAsignaturasCupoService } from './asignacion-asignaturas-cupo.service';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { PersonaService } from 'app/CRUD/persona/persona.service';
import { JornadaService } from 'app/CRUD/jornada/jornada.service';
import { AsignaturaCupoService } from 'app/CRUD/asignaturacupo/asignaturacupo.service';
import { MallaService } from 'app/CRUD/malla/malla.service';
import { AsignaturaService } from 'app/CRUD/asignatura/asignatura.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsignacionAsignaturasCupoRoutingModule
   ],
   providers: [AsignacionAsignaturasCupoService,
    CarreraService,
    AsignaturaCupoService,
    JornadaService,
    MallaService,
    AsignaturaService,
    MatriculacionService],
   declarations: [AsignacionAsignaturasCupoComponent],
})
export class AsignacionAsignaturasCupoModule { }
