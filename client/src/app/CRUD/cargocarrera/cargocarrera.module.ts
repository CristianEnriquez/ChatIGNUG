import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CargoCarreraRoutingModule } from './cargocarrera-routing.module';
import { CargoCarreraComponent } from './cargocarrera.component';
import { CargoCarreraService } from './cargocarrera.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CargoCarreraRoutingModule
   ],
   providers: [CargoCarreraService],
   declarations: [CargoCarreraComponent],
})
export class CargoCarreraModule { }
