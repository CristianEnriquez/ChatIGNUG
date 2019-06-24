import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TipoDocumentoRoutingModule } from './tipodocumento-routing.module';
import { TipoDocumentoComponent } from './tipodocumento.component';
import { TipoDocumentoService } from './tipodocumento.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TipoDocumentoRoutingModule
   ],
   providers: [TipoDocumentoService],
   declarations: [TipoDocumentoComponent],
})
export class TipoDocumentoModule { }
