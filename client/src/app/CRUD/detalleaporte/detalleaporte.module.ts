import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetalleAporteRoutingModule } from './detalleaporte-routing.module';
import { DetalleAporteComponent } from './detalleaporte.component';
import { DetalleAporteService } from './detalleaporte.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DetalleAporteRoutingModule
   ],
   providers: [DetalleAporteService],
   declarations: [DetalleAporteComponent],
})
export class DetalleAporteModule { }
