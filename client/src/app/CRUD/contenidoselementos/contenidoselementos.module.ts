import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContenidosElementosRoutingModule } from './contenidoselementos-routing.module';
import { ContenidosElementosComponent } from './contenidoselementos.component';
import { ContenidosElementosService } from './contenidoselementos.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ContenidosElementosRoutingModule
   ],
   providers: [ContenidosElementosService],
   declarations: [ContenidosElementosComponent],
})
export class ContenidosElementosModule { }
