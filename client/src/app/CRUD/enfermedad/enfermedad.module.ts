import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EnfermedadRoutingModule } from './enfermedad-routing.module';
import { EnfermedadComponent } from './enfermedad.component';
import { EnfermedadService } from './enfermedad.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EnfermedadRoutingModule
   ],
   providers: [EnfermedadService],
   declarations: [EnfermedadComponent],
})
export class EnfermedadModule { }
