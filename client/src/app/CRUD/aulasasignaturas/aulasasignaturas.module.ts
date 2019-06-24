import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AulasAsignaturasRoutingModule } from './aulasasignaturas-routing.module';
import { AulasAsignaturasComponent } from './aulasasignaturas.component';
import { AulasAsignaturasService } from './aulasasignaturas.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AulasAsignaturasRoutingModule
   ],
   providers: [AulasAsignaturasService],
   declarations: [AulasAsignaturasComponent],
})
export class AulasAsignaturasModule { }
