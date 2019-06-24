import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GeneroRoutingModule } from './genero-routing.module';
import { GeneroComponent } from './genero.component';
import { GeneroService } from './genero.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      GeneroRoutingModule
   ],
   providers: [GeneroService],
   declarations: [GeneroComponent],
})
export class GeneroModule { }
