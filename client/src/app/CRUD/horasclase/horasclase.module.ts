import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HorasClaseRoutingModule } from './horasclase-routing.module';
import { HorasClaseComponent } from './horasclase.component';
import { HorasClaseService } from './horasclase.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      HorasClaseRoutingModule
   ],
   providers: [HorasClaseService],
   declarations: [HorasClaseComponent],
})
export class HorasClaseModule { }
