import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UnidadOrganizacionRoutingModule } from './unidadorganizacion-routing.module';
import { UnidadOrganizacionComponent } from './unidadorganizacion.component';
import { UnidadOrganizacionService } from './unidadorganizacion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      UnidadOrganizacionRoutingModule
   ],
   providers: [UnidadOrganizacionService],
   declarations: [UnidadOrganizacionComponent],
})
export class UnidadOrganizacionModule { }
