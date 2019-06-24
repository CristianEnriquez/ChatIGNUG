import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ParcialRoutingModule } from './parcial-routing.module';
import { ParcialComponent } from './parcial.component';
import { ParcialService } from './parcial.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ParcialRoutingModule
   ],
   providers: [ParcialService],
   declarations: [ParcialComponent],
})
export class ParcialModule { }
