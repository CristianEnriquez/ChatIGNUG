import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatricesRoutingModule } from './matrices-routing.module';
import { MatricesComponent } from './matrices.component';
import { FormsModule } from '@angular/forms';

import { CarreraService } from 'app/CRUD/carrera/carrera.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MatricesRoutingModule
  ],
  declarations: [MatricesComponent],
  providers: [CarreraService]
})
export class MatricesModule { }
