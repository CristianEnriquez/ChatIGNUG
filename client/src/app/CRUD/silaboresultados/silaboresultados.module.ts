import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboResultadosRoutingModule } from './silaboresultados-routing.module';
import { SilaboResultadosComponent } from './silaboresultados.component';
import { SilaboResultadosService } from './silaboresultados.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboResultadosRoutingModule
   ],
   providers: [SilaboResultadosService],
   declarations: [SilaboResultadosComponent],
})
export class SilaboResultadosModule { }
