import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TituloRoutingModule } from './titulo-routing.module';
import { TituloComponent } from './titulo.component';
import { TituloService } from './titulo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TituloRoutingModule
   ],
   providers: [TituloService],
   declarations: [TituloComponent],
})
export class TituloModule { }
