import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoInstitucionProcedenciaRoutingModule } from './tipoinstitucionprocedencia-routing.module';
import { TipoInstitucionProcedenciaComponent } from './tipoinstitucionprocedencia.component';
import { TipoInstitucionProcedenciaService } from './tipoinstitucionprocedencia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoInstitucionProcedenciaRoutingModule
   ],
   providers: [TipoInstitucionProcedenciaService],
   declarations: [TipoInstitucionProcedenciaComponent],
})
export class TipoInstitucionProcedenciaModule { }
