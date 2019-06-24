import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InstitutoRoutingModule } from './instituto-routing.module';
import { InstitutoComponent } from './instituto.component';
import { InstitutoService } from './instituto.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      InstitutoRoutingModule
   ],
   providers: [InstitutoService],
   declarations: [InstitutoComponent],
})
export class InstitutoModule { }
