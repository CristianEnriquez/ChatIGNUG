import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UbicacionRoutingModule } from './ubicacion-routing.module';
import { UbicacionComponent } from './ubicacion.component';
import { UbicacionService } from './ubicacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      UbicacionRoutingModule
   ],
   providers: [UbicacionService],
   declarations: [UbicacionComponent],
})
export class UbicacionModule { }
