import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AsignaturaCorrequisitoRoutingModule } from './asignaturacorrequisito-routing.module';
import { AsignaturaCorrequisitoComponent } from './asignaturacorrequisito.component';
import { AsignaturaCorrequisitoService } from './asignaturacorrequisito.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AsignaturaCorrequisitoRoutingModule
   ],
   providers: [AsignaturaCorrequisitoService],
   declarations: [AsignaturaCorrequisitoComponent],
})
export class AsignaturaCorrequisitoModule { }
