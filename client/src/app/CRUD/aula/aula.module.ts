import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AulaRoutingModule } from './aula-routing.module';
import { AulaComponent } from './aula.component';
import { AulaService } from './aula.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AulaRoutingModule
   ],
   providers: [AulaService],
   declarations: [AulaComponent],
})
export class AulaModule { }
