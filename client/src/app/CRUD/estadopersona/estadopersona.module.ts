import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EstadoPersonaRoutingModule } from './estadopersona-routing.module';
import { EstadoPersonaComponent } from './estadopersona.component';
import { EstadoPersonaService } from './estadopersona.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EstadoPersonaRoutingModule
   ],
   providers: [EstadoPersonaService],
   declarations: [EstadoPersonaComponent],
})
export class EstadoPersonaModule { }
