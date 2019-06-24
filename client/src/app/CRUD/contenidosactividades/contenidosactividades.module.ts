import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContenidosActividadesRoutingModule } from './contenidosactividades-routing.module';
import { ContenidosActividadesComponent } from './contenidosactividades.component';
import { ContenidosActividadesService } from './contenidosactividades.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ContenidosActividadesRoutingModule
   ],
   providers: [ContenidosActividadesService],
   declarations: [ContenidosActividadesComponent],
})
export class ContenidosActividadesModule { }
