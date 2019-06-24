import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboRoutingModule } from './silabo-routing.module';
import { SilaboComponent } from './silabo.component';
import { SilaboService } from './silabo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboRoutingModule
   ],
   providers: [SilaboService],
   declarations: [SilaboComponent],
})
export class SilaboModule { }
