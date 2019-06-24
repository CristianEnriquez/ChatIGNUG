import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EstadoRoutingModule } from './estado-routing.module';
import { EstadoComponent } from './estado.component';
import { EstadoService } from './estado.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EstadoRoutingModule
   ],
   providers: [EstadoService],
   declarations: [EstadoComponent],
})
export class EstadoModule { }
