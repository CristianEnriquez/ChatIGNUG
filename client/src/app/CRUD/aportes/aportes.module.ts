import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AportesRoutingModule } from './aportes-routing.module';
import { AportesComponent } from './aportes.component';
import { AportesService } from './aportes.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AportesRoutingModule
   ],
   providers: [AportesService],
   declarations: [AportesComponent],
})
export class AportesModule { }
