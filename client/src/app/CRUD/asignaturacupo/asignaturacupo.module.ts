import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsignaturaCupoRoutingModule } from './asignaturacupo-routing.module';
import { AsignaturaCupoComponent } from './asignaturacupo.component';
import { AsignaturaCupoService } from './asignaturacupo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsignaturaCupoRoutingModule
   ],
   providers: [AsignaturaCupoService],
   declarations: [AsignaturaCupoComponent],
})
export class AsignaturaCupoModule { }
