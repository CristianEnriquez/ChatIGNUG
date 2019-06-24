import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CargoInstitutoRoutingModule } from './cargoinstituto-routing.module';
import { CargoInstitutoComponent } from './cargoinstituto.component';
import { CargoInstitutoService } from './cargoinstituto.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CargoInstitutoRoutingModule
   ],
   providers: [CargoInstitutoService],
   declarations: [CargoInstitutoComponent],
})
export class CargoInstitutoModule { }
