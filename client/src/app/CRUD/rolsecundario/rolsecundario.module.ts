import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RolSecundarioRoutingModule } from './rolsecundario-routing.module';
import { RolSecundarioComponent } from './rolsecundario.component';
import { RolSecundarioService } from './rolsecundario.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RolSecundarioRoutingModule
   ],
   providers: [RolSecundarioService],
   declarations: [RolSecundarioComponent],
})
export class RolSecundarioModule { }
