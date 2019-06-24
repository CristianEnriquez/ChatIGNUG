import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoMatriculaRoutingModule } from './tipomatricula-routing.module';
import { TipoMatriculaComponent } from './tipomatricula.component';
import { TipoMatriculaService } from './tipomatricula.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoMatriculaRoutingModule
   ],
   providers: [TipoMatriculaService],
   declarations: [TipoMatriculaComponent],
})
export class TipoMatriculaModule { }
