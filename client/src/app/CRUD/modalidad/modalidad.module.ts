import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalidadRoutingModule } from './modalidad-routing.module';
import { ModalidadComponent } from './modalidad.component';
import { ModalidadService } from './modalidad.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ModalidadRoutingModule
   ],
   providers: [ModalidadService],
   declarations: [ModalidadComponent],
})
export class ModalidadModule { }
