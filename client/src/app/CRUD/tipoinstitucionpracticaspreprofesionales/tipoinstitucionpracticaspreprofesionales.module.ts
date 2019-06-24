import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoInstitucionPracticasPreprofesionalesRoutingModule } from './tipoinstitucionpracticaspreprofesionales-routing.module';
import { TipoInstitucionPracticasPreprofesionalesComponent } from './tipoinstitucionpracticaspreprofesionales.component';
import { TipoInstitucionPracticasPreprofesionalesService } from './tipoinstitucionpracticaspreprofesionales.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoInstitucionPracticasPreprofesionalesRoutingModule
   ],
   providers: [TipoInstitucionPracticasPreprofesionalesService],
   declarations: [TipoInstitucionPracticasPreprofesionalesComponent],
})
export class TipoInstitucionPracticasPreprofesionalesModule { }
