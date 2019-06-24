import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsignaturaPrerrequisitoRoutingModule } from './asignaturaprerrequisito-routing.module';
import { AsignaturaPrerrequisitoComponent } from './asignaturaprerrequisito.component';
import { AsignaturaPrerrequisitoService } from './asignaturaprerrequisito.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsignaturaPrerrequisitoRoutingModule
   ],
   providers: [AsignaturaPrerrequisitoService],
   declarations: [AsignaturaPrerrequisitoComponent],
})
export class AsignaturaPrerrequisitoModule { }
