import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosRoutingModule } from './horarios-routing.module';
import { HorariosComponent } from './horarios.component';

@NgModule({
  imports: [
    CommonModule,
    HorariosRoutingModule
  ],
  declarations: [HorariosComponent]
})
export class HorariosModule { }
