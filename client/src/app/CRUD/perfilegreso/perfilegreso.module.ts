import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PerfilEgresoRoutingModule } from './perfilegreso-routing.module';
import { PerfilEgresoComponent } from './perfilegreso.component';
import { PerfilEgresoService } from './perfilegreso.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PerfilEgresoRoutingModule
   ],
   providers: [PerfilEgresoService],
   declarations: [PerfilEgresoComponent],
})
export class PerfilEgresoModule { }
