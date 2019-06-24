import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsignacionRolesRoutingModule } from './asignacion-roles-routing.module';
import { AsignacionRolesComponent } from './asignacion-roles.component';
import { AsignacionRolesService } from './asignacion-roles.service';
import { RolSecundarioService } from 'app/CRUD/rolsecundario/rolsecundario.service';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { RolesService } from 'app/CRUD/roles/roles.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsignacionRolesRoutingModule
   ],
   providers: [AsignacionRolesService,
    RolSecundarioService,
    RolesService,
    MatriculacionService],
   declarations: [AsignacionRolesComponent],
})
export class AsignacionRolesModule { }
