import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { JornadaCarreraRoutingModule } from './jornadacarrera-routing.module';
import { JornadaCarreraComponent } from './jornadacarrera.component';
import { JornadaCarreraService } from './jornadacarrera.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      JornadaCarreraRoutingModule
   ],
   providers: [JornadaCarreraService],
   declarations: [JornadaCarreraComponent],
})
export class JornadaCarreraModule { }
