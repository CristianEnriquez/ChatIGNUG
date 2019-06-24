import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AporteFinalRoutingModule } from './aportefinal-routing.module';
import { AporteFinalComponent } from './aportefinal.component';
import { AporteFinalService } from './aportefinal.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AporteFinalRoutingModule
   ],
   providers: [AporteFinalService],
   declarations: [AporteFinalComponent],
})
export class AporteFinalModule { }
