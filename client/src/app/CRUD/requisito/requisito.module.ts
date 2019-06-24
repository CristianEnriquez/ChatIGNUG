import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RequisitoRoutingModule } from './requisito-routing.module';
import { RequisitoComponent } from './requisito.component';
import { RequisitoService } from './requisito.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RequisitoRoutingModule
   ],
   providers: [RequisitoService],
   declarations: [RequisitoComponent],
})
export class RequisitoModule { }
