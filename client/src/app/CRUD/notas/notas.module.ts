import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { NotasService } from './notas.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      NotasRoutingModule
   ],
   providers: [NotasService],
   declarations: [NotasComponent],
})
export class NotasModule { }
