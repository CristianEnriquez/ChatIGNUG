import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlcanceProyectoVinculacionRoutingModule } from './alcanceproyectovinculacion-routing.module';
import { AlcanceProyectoVinculacionComponent } from './alcanceproyectovinculacion.component';
import { AlcanceProyectoVinculacionService } from './alcanceproyectovinculacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AlcanceProyectoVinculacionRoutingModule
   ],
   providers: [AlcanceProyectoVinculacionService],
   declarations: [AlcanceProyectoVinculacionComponent],
})
export class AlcanceProyectoVinculacionModule { }
