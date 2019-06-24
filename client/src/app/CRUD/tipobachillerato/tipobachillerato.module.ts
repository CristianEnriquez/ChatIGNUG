import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoBachilleratoRoutingModule } from './tipobachillerato-routing.module';
import { TipoBachilleratoComponent } from './tipobachillerato.component';
import { TipoBachilleratoService } from './tipobachillerato.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoBachilleratoRoutingModule
   ],
   providers: [TipoBachilleratoService],
   declarations: [TipoBachilleratoComponent],
})
export class TipoBachilleratoModule { }
