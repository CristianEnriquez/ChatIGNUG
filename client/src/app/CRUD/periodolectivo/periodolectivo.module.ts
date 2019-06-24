import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PeriodoLectivoRoutingModule } from './periodolectivo-routing.module';
import { PeriodoLectivoComponent } from './periodolectivo.component';
import { PeriodoLectivoService } from './periodolectivo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PeriodoLectivoRoutingModule
   ],
   providers: [PeriodoLectivoService],
   declarations: [PeriodoLectivoComponent],
})
export class PeriodoLectivoModule { }
