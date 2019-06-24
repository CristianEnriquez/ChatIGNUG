import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HorasClaseDiaRoutingModule } from './horasclasedia-routing.module';
import { HorasClaseDiaComponent } from './horasclasedia.component';
import { HorasClaseDiaService } from './horasclasedia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      HorasClaseDiaRoutingModule
   ],
   providers: [HorasClaseDiaService],
   declarations: [HorasClaseDiaComponent],
})
export class HorasClaseDiaModule { }
