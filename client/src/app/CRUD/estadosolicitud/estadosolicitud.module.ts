import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EstadoSolicitudRoutingModule } from './estadosolicitud-routing.module';
import { EstadoSolicitudComponent } from './estadosolicitud.component';
import { EstadoSolicitudService } from './estadosolicitud.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EstadoSolicitudRoutingModule
   ],
   providers: [EstadoSolicitudService],
   declarations: [EstadoSolicitudComponent],
})
export class EstadoSolicitudModule { }
