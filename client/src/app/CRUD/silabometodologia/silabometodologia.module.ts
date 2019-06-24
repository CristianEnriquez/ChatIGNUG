import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboMetodologiaRoutingModule } from './silabometodologia-routing.module';
import { SilaboMetodologiaComponent } from './silabometodologia.component';
import { SilaboMetodologiaService } from './silabometodologia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboMetodologiaRoutingModule
   ],
   providers: [SilaboMetodologiaService],
   declarations: [SilaboMetodologiaComponent],
})
export class SilaboMetodologiaModule { }
