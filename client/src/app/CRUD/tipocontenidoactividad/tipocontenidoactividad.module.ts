import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoContenidoActividadRoutingModule } from './tipocontenidoactividad-routing.module';
import { TipoContenidoActividadComponent } from './tipocontenidoactividad.component';
import { TipoContenidoActividadService } from './tipocontenidoactividad.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoContenidoActividadRoutingModule
   ],
   providers: [TipoContenidoActividadService],
   declarations: [TipoContenidoActividadComponent],
})
export class TipoContenidoActividadModule { }
