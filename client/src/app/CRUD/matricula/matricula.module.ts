import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaComponent } from './matricula.component';
import { MatriculaService } from './matricula.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      MatriculaRoutingModule
   ],
   providers: [MatriculaService],
   declarations: [MatriculaComponent],
})
export class MatriculaModule { }
