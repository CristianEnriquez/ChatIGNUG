import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetalleNotasRoutingModule } from './detallenotas-routing.module';
import { DetalleNotasComponent } from './detallenotas.component';
import { DetalleNotasService } from './detallenotas.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DetalleNotasRoutingModule
   ],
   providers: [DetalleNotasService],
   declarations: [DetalleNotasComponent],
})
export class DetalleNotasModule { }
