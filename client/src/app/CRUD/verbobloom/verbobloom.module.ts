import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { VerboBloomRoutingModule } from './verbobloom-routing.module';
import { VerboBloomComponent } from './verbobloom.component';
import { VerboBloomService } from './verbobloom.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      VerboBloomRoutingModule
   ],
   providers: [VerboBloomService],
   declarations: [VerboBloomComponent],
})
export class VerboBloomModule { }
