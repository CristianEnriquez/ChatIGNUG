import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CupoAsignaturaRoutingModule } from './cupo-asignatura-routing.module';
import { CupoAsignaturaComponent } from './cupo-asignatura.component';
import { CupoAsignaturaService } from 'app/layout/cupo-asignatura/cupo-asignatura.service';
@NgModule({
  imports: [
    CommonModule,
    CupoAsignaturaRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [CupoAsignaturaService],
  declarations: [CupoAsignaturaComponent]
})
export class CupoAsignaturaModule { }
