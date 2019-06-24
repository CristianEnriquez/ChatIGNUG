import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CampoFormacionRoutingModule } from './campoformacion-routing.module';
import { CampoFormacionComponent } from './campoformacion.component';
import { CampoFormacionService } from './campoformacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CampoFormacionRoutingModule
   ],
   providers: [CampoFormacionService],
   declarations: [CampoFormacionComponent],
})
export class CampoFormacionModule { }
