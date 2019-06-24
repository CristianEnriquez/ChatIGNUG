import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DiscapacidadRoutingModule } from './discapacidad-routing.module';
import { DiscapacidadComponent } from './discapacidad.component';
import { DiscapacidadService } from './discapacidad.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DiscapacidadRoutingModule
   ],
   providers: [DiscapacidadService],
   declarations: [DiscapacidadComponent],
})
export class DiscapacidadModule { }
