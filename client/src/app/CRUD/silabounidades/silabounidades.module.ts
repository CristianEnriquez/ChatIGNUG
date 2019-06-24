import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboUnidadesRoutingModule } from './silabounidades-routing.module';
import { SilaboUnidadesComponent } from './silabounidades.component';
import { SilaboUnidadesService } from './silabounidades.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboUnidadesRoutingModule
   ],
   providers: [SilaboUnidadesService],
   declarations: [SilaboUnidadesComponent],
})
export class SilaboUnidadesModule { }
