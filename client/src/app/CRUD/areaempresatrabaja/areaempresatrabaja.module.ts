import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AreaEmpresaTrabajaRoutingModule } from './areaempresatrabaja-routing.module';
import { AreaEmpresaTrabajaComponent } from './areaempresatrabaja.component';
import { AreaEmpresaTrabajaService } from './areaempresatrabaja.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AreaEmpresaTrabajaRoutingModule
   ],
   providers: [AreaEmpresaTrabajaService],
   declarations: [AreaEmpresaTrabajaComponent],
})
export class AreaEmpresaTrabajaModule { }
