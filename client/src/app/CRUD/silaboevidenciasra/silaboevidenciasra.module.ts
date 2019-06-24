import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboEvidenciasRaRoutingModule } from './silaboevidenciasra-routing.module';
import { SilaboEvidenciasRaComponent } from './silaboevidenciasra.component';
import { SilaboEvidenciasRaService } from './silaboevidenciasra.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboEvidenciasRaRoutingModule
   ],
   providers: [SilaboEvidenciasRaService],
   declarations: [SilaboEvidenciasRaComponent],
})
export class SilaboEvidenciasRaModule { }
