import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CupoRoutingModule } from './cupo-routing.module';
import { CupoComponent } from './cupo.component';
import { CupoService } from './cupo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CupoRoutingModule
   ],
   providers: [CupoService],
   declarations: [CupoComponent],
})
export class CupoModule { }
