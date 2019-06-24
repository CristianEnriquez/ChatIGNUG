import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarreraRoutingModule } from './carrera-routing.module';
import { CarreraComponent } from './carrera.component';
import { CarreraService } from './carrera.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CarreraRoutingModule
   ],
   providers: [CarreraService],
   declarations: [CarreraComponent],
})
export class CarreraModule { }
