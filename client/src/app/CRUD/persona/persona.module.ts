import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaComponent } from './persona.component';
import { PersonaService } from './persona.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PersonaRoutingModule
   ],
   providers: [PersonaService],
   declarations: [PersonaComponent],
})
export class PersonaModule { }
