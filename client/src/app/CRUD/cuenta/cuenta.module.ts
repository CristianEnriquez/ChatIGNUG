import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { CuentaComponent } from './cuenta.component';
import { CuentaService } from './cuenta.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CuentaRoutingModule
   ],
   providers: [CuentaService],
   declarations: [CuentaComponent],
})
export class CuentaModule { }
