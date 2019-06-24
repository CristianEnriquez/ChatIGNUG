import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { JornadaRoutingModule } from './jornada-routing.module';
import { JornadaComponent } from './jornada.component';
import { JornadaService } from './jornada.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      JornadaRoutingModule
   ],
   providers: [JornadaService],
   declarations: [JornadaComponent],
})
export class JornadaModule { }
