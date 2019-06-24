import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OcupacionEstudianteRoutingModule } from './ocupacionestudiante-routing.module';
import { OcupacionEstudianteComponent } from './ocupacionestudiante.component';
import { OcupacionEstudianteService } from './ocupacionestudiante.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      OcupacionEstudianteRoutingModule
   ],
   providers: [OcupacionEstudianteService],
   declarations: [OcupacionEstudianteComponent],
})
export class OcupacionEstudianteModule { }
