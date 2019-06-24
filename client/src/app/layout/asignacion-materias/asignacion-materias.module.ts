import { AsignaturaCupoService } from 'app/CRUD/asignaturacupo/asignaturacupo.service';
import { PeriodoAcademicoService } from './../../CRUD/periodoacademico/periodoacademico.service';
import { AsignacionMateriasService } from './asignacion-materias.service';
import { JornadaService } from 'app/CRUD/jornada/jornada.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';

import { AsignacionMateriasRoutingModule } from './asignacion-materias-routing.module';
import { AsignacionMateriasComponent } from './asignacion-materias.component';
import { PeriodoLectivoService } from '../../CRUD/periodolectivo/periodolectivo.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    AsignacionMateriasRoutingModule
  ],
  declarations: [AsignacionMateriasComponent],
  providers: [CarreraService, JornadaService, PeriodoLectivoService, AsignacionMateriasService, PeriodoAcademicoService, AsignaturaCupoService]
})
export class AsignacionMateriasModule { }
