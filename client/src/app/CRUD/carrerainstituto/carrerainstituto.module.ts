import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarreraInstitutoRoutingModule } from './carrerainstituto-routing.module';
import { CarreraInstitutoComponent } from './carrerainstituto.component';
import { CarreraInstitutoService } from './carrerainstituto.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CarreraInstitutoRoutingModule
   ],
   providers: [CarreraInstitutoService],
   declarations: [CarreraInstitutoComponent],
})
export class CarreraInstitutoModule { }
