import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoEducacionContinuaRoutingModule } from './tipoeducacioncontinua-routing.module';
import { TipoEducacionContinuaComponent } from './tipoeducacioncontinua.component';
import { TipoEducacionContinuaService } from './tipoeducacioncontinua.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoEducacionContinuaRoutingModule
   ],
   providers: [TipoEducacionContinuaService],
   declarations: [TipoEducacionContinuaComponent],
})
export class TipoEducacionContinuaModule { }
