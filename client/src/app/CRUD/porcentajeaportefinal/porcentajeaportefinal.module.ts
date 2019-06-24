import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PorcentajeAporteFinalRoutingModule } from './porcentajeaportefinal-routing.module';
import { PorcentajeAporteFinalComponent } from './porcentajeaportefinal.component';
import { PorcentajeAporteFinalService } from './porcentajeaportefinal.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PorcentajeAporteFinalRoutingModule
   ],
   providers: [PorcentajeAporteFinalService],
   declarations: [PorcentajeAporteFinalComponent],
})
export class PorcentajeAporteFinalModule { }
