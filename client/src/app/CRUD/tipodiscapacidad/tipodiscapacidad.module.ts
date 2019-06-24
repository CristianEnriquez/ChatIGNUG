import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoDiscapacidadRoutingModule } from './tipodiscapacidad-routing.module';
import { TipoDiscapacidadComponent } from './tipodiscapacidad.component';
import { TipoDiscapacidadService } from './tipodiscapacidad.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoDiscapacidadRoutingModule
   ],
   providers: [TipoDiscapacidadService],
   declarations: [TipoDiscapacidadComponent],
})
export class TipoDiscapacidadModule { }
