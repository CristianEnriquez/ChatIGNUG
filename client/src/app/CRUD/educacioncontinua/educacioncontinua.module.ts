import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EducacionContinuaRoutingModule } from './educacioncontinua-routing.module';
import { EducacionContinuaComponent } from './educacioncontinua.component';
import { EducacionContinuaService } from './educacioncontinua.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EducacionContinuaRoutingModule
   ],
   providers: [EducacionContinuaService],
   declarations: [EducacionContinuaComponent],
})
export class EducacionContinuaModule { }
