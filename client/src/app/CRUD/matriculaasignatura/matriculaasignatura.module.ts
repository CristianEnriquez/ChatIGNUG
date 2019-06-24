import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatriculaAsignaturaRoutingModule } from './matriculaasignatura-routing.module';
import { MatriculaAsignaturaComponent } from './matriculaasignatura.component';
import { MatriculaAsignaturaService } from './matriculaasignatura.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      MatriculaAsignaturaRoutingModule
   ],
   providers: [MatriculaAsignaturaService],
   declarations: [MatriculaAsignaturaComponent],
})
export class MatriculaAsignaturaModule { }
