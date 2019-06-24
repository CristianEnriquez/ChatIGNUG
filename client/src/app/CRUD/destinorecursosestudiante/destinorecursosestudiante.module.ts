import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DestinoRecursosEstudianteRoutingModule } from './destinorecursosestudiante-routing.module';
import { DestinoRecursosEstudianteComponent } from './destinorecursosestudiante.component';
import { DestinoRecursosEstudianteService } from './destinorecursosestudiante.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DestinoRecursosEstudianteRoutingModule
   ],
   providers: [DestinoRecursosEstudianteService],
   declarations: [DestinoRecursosEstudianteComponent],
})
export class DestinoRecursosEstudianteModule { }
