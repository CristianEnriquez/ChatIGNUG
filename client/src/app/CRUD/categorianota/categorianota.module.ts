import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CategoriaNotaRoutingModule } from './categorianota-routing.module';
import { CategoriaNotaComponent } from './categorianota.component';
import { CategoriaNotaService } from './categorianota.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CategoriaNotaRoutingModule
   ],
   providers: [CategoriaNotaService],
   declarations: [CategoriaNotaComponent],
})
export class CategoriaNotaModule { }
