import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SolicitudMatriculaRoutingModule } from './solicitudmatricula-routing.module';
import { SolicitudMatriculaComponent } from './solicitudmatricula.component';
import { SolicitudMatriculaService } from './solicitudmatricula.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SolicitudMatriculaRoutingModule
   ],
   providers: [SolicitudMatriculaService],
   declarations: [SolicitudMatriculaComponent],
})
export class SolicitudMatriculaModule { }
