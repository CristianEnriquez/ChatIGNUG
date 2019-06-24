import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SilaboBiliografiaRoutingModule } from './silabobiliografia-routing.module';
import { SilaboBiliografiaComponent } from './silabobiliografia.component';
import { SilaboBiliografiaService } from './silabobiliografia.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      SilaboBiliografiaRoutingModule
   ],
   providers: [SilaboBiliografiaService],
   declarations: [SilaboBiliografiaComponent],
})
export class SilaboBiliografiaModule { }
