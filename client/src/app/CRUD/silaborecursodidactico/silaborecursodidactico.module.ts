import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboRecursoDidacticoRoutingModule } from './silaborecursodidactico-routing.module';
import { SilaboRecursoDidacticoComponent } from './silaborecursodidactico.component';
import { SilaboRecursoDidacticoService } from './silaborecursodidactico.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboRecursoDidacticoRoutingModule
   ],
   providers: [SilaboRecursoDidacticoService],
   declarations: [SilaboRecursoDidacticoComponent],
})
export class SilaboRecursoDidacticoModule { }
