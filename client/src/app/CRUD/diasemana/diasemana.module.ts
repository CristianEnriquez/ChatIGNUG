import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DiaSemanaRoutingModule } from './diasemana-routing.module';
import { DiaSemanaComponent } from './diasemana.component';
import { DiaSemanaService } from './diasemana.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DiaSemanaRoutingModule
   ],
   providers: [DiaSemanaService],
   declarations: [DiaSemanaComponent],
})
export class DiaSemanaModule { }
