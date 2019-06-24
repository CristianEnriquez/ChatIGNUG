import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalidadCarreraRoutingModule } from './modalidadcarrera-routing.module';
import { ModalidadCarreraComponent } from './modalidadcarrera.component';
import { ModalidadCarreraService } from './modalidadcarrera.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ModalidadCarreraRoutingModule
   ],
   providers: [ModalidadCarreraService],
   declarations: [ModalidadCarreraComponent],
})
export class ModalidadCarreraModule { }
