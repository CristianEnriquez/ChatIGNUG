import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PonderacionRoutingModule } from './ponderacion-routing.module';
import { PonderacionComponent } from './ponderacion.component';
import { PonderacionService } from './ponderacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PonderacionRoutingModule
   ],
   providers: [PonderacionService],
   declarations: [PonderacionComponent],
})
export class PonderacionModule { }
