import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoRequisitoRoutingModule } from './tiporequisito-routing.module';
import { TipoRequisitoComponent } from './tiporequisito.component';
import { TipoRequisitoService } from './tiporequisito.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoRequisitoRoutingModule
   ],
   providers: [TipoRequisitoService],
   declarations: [TipoRequisitoComponent],
})
export class TipoRequisitoModule { }
