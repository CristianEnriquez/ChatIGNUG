import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsignaturaRoutingModule } from './asignatura-routing.module';
import { AsignaturaComponent } from './asignatura.component';
import { AsignaturaService } from './asignatura.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsignaturaRoutingModule
   ],
   providers: [AsignaturaService],
   declarations: [AsignaturaComponent],
})
export class AsignaturaModule { }
