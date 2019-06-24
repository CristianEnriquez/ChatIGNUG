import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoComponent } from './documento.component';
import { DocumentoService } from './documento.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DocumentoRoutingModule
   ],
   providers: [DocumentoService],
   declarations: [DocumentoComponent],
})
export class DocumentoModule { }
