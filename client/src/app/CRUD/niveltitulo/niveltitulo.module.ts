import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NivelTituloRoutingModule } from './niveltitulo-routing.module';
import { NivelTituloComponent } from './niveltitulo.component';
import { NivelTituloService } from './niveltitulo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      NivelTituloRoutingModule
   ],
   providers: [NivelTituloService],
   declarations: [NivelTituloComponent],
})
export class NivelTituloModule { }
