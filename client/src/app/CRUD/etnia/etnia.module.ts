import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EtniaRoutingModule } from './etnia-routing.module';
import { EtniaComponent } from './etnia.component';
import { EtniaService } from './etnia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EtniaRoutingModule
   ],
   providers: [EtniaService],
   declarations: [EtniaComponent],
})
export class EtniaModule { }
