import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoIngresosRoutingModule } from './tipoingresos-routing.module';
import { TipoIngresosComponent } from './tipoingresos.component';
import { TipoIngresosService } from './tipoingresos.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoIngresosRoutingModule
   ],
   providers: [TipoIngresosService],
   declarations: [TipoIngresosComponent],
})
export class TipoIngresosModule { }
