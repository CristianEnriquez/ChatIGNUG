import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RelacionPerfilResultadoRoutingModule } from './relacionperfilresultado-routing.module';
import { RelacionPerfilResultadoComponent } from './relacionperfilresultado.component';
import { RelacionPerfilResultadoService } from './relacionperfilresultado.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RelacionPerfilResultadoRoutingModule
   ],
   providers: [RelacionPerfilResultadoService],
   declarations: [RelacionPerfilResultadoComponent],
})
export class RelacionPerfilResultadoModule { }
