import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CategoriaAporteRoutingModule } from './categoriaaporte-routing.module';
import { CategoriaAporteComponent } from './categoriaaporte.component';
import { CategoriaAporteService } from './categoriaaporte.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CategoriaAporteRoutingModule
   ],
   providers: [CategoriaAporteService],
   declarations: [CategoriaAporteComponent],
})
export class CategoriaAporteModule { }
