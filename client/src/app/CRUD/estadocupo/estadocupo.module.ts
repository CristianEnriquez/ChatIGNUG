import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EstadoCupoRoutingModule } from './estadocupo-routing.module';
import { EstadoCupoComponent } from './estadocupo.component';
import { EstadoCupoService } from './estadocupo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EstadoCupoRoutingModule
   ],
   providers: [EstadoCupoService],
   declarations: [EstadoCupoComponent],
})
export class EstadoCupoModule { }
