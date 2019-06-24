import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoComponent } from './cargo.component';
import { CargoService } from './cargo.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CargoRoutingModule
   ],
   providers: [CargoService],
   declarations: [CargoComponent],
})
export class CargoModule { }
