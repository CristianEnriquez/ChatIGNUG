import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EstadoCivilRoutingModule } from './estadocivil-routing.module';
import { EstadoCivilComponent } from './estadocivil.component';
import { EstadoCivilService } from './estadocivil.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EstadoCivilRoutingModule
   ],
   providers: [EstadoCivilService],
   declarations: [EstadoCivilComponent],
})
export class EstadoCivilModule { }
