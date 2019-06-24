import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecursosDidacticosRoutingModule } from './recursosdidacticos-routing.module';
import { RecursosDidacticosComponent } from './recursosdidacticos.component';
import { RecursosDidacticosService } from './recursosdidacticos.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RecursosDidacticosRoutingModule
   ],
   providers: [RecursosDidacticosService],
   declarations: [RecursosDidacticosComponent],
})
export class RecursosDidacticosModule { }
