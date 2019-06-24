import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoCarreraRoutingModule } from './tipocarrera-routing.module';
import { TipoCarreraComponent } from './tipocarrera.component';
import { TipoCarreraService } from './tipocarrera.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoCarreraRoutingModule
   ],
   providers: [TipoCarreraService],
   declarations: [TipoCarreraComponent],
})
export class TipoCarreraModule { }
