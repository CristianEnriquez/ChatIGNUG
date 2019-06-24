import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MetodologiaRoutingModule } from './metodologia-routing.module';
import { MetodologiaComponent } from './metodologia.component';
import { MetodologiaService } from './metodologia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      MetodologiaRoutingModule
   ],
   providers: [MetodologiaService],
   declarations: [MetodologiaComponent],
})
export class MetodologiaModule { }
