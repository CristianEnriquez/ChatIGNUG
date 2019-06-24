import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OcupacionRoutingModule } from './ocupacion-routing.module';
import { OcupacionComponent } from './ocupacion.component';
import { OcupacionService } from './ocupacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      OcupacionRoutingModule
   ],
   providers: [OcupacionService],
   declarations: [OcupacionComponent],
})
export class OcupacionModule { }
