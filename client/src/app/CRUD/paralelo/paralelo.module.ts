import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ParaleloRoutingModule } from './paralelo-routing.module';
import { ParaleloComponent } from './paralelo.component';
import { ParaleloService } from './paralelo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ParaleloRoutingModule
   ],
   providers: [ParaleloService],
   declarations: [ParaleloComponent],
})
export class ParaleloModule { }
