import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExperienciaLaboralRoutingModule } from './experiencialaboral-routing.module';
import { ExperienciaLaboralComponent } from './experiencialaboral.component';
import { ExperienciaLaboralService } from './experiencialaboral.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ExperienciaLaboralRoutingModule
   ],
   providers: [ExperienciaLaboralService],
   declarations: [ExperienciaLaboralComponent],
})
export class ExperienciaLaboralModule { }
