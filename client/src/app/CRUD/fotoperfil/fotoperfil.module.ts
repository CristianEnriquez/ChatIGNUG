import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FotoPerfilRoutingModule } from './fotoperfil-routing.module';
import { FotoPerfilComponent } from './fotoperfil.component';
import { FotoPerfilService } from './fotoperfil.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      FotoPerfilRoutingModule
   ],
   providers: [FotoPerfilService],
   declarations: [FotoPerfilComponent],
})
export class FotoPerfilModule { }
