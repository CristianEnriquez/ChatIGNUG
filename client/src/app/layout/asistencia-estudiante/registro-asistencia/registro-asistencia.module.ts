import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { RegistroAsistenciaRoutingModule } from './registro-asistencia-routing.module';
import { RegistroAsistenciaComponent } from './registro-asistencia.component';
import { AsistenciaEstudianteService } from '../asistencia-estudiante.service';
import { AsignaturaDocenteAsistenciaEstudiante } from 'app/entidades/especifico/Asignatura-Docente-Asistencia-Estudiante';
import { RegistroAsistenciaEstudiante } from 'app/entidades/especifico/Registro-Asistencia-Estudiante';
import { Persona } from 'app/entidades/CRUD/Persona';
import { AsignaturaDocente } from 'app/entidades/especifico/Asignatura-Docente';
import { PeriodoLectivoActual } from 'app/entidades/especifico/Periodo-Lectivo-Actual';
import { TotalHorasDia } from 'app/entidades/especifico/Total-Horas-Dia';
import { Router } from '@angular/router';
import { PeriodoLectivo } from 'app/entidades/CRUD/PeriodoLectivo';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegistroAsistenciaRoutingModule
  ],
  providers: [AsistenciaEstudianteService],
  declarations: [RegistroAsistenciaComponent]
})
export class RegistroAsistenciaModule { }
