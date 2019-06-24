import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboElementosRoutingModule } from './silaboelementos-routing.module';
import { SilaboElementosComponent } from './silaboelementos.component';
import { SilaboElementosService } from './silaboelementos.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboElementosRoutingModule
   ],
   providers: [SilaboElementosService],
   declarations: [SilaboElementosComponent],
})
export class SilaboElementosModule { }
