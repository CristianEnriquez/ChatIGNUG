import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DocenteAsignaturaRoutingModule } from './docenteasignatura-routing.module';
import { DocenteAsignaturaComponent } from './docenteasignatura.component';
import { DocenteAsignaturaService } from './docenteasignatura.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DocenteAsignaturaRoutingModule
   ],
   providers: [DocenteAsignaturaService],
   declarations: [DocenteAsignaturaComponent],
})
export class DocenteAsignaturaModule { }
