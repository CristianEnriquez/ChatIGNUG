import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EjeTransversalRoutingModule } from './ejetransversal-routing.module';
import { EjeTransversalComponent } from './ejetransversal.component';
import { EjeTransversalService } from './ejetransversal.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EjeTransversalRoutingModule
   ],
   providers: [EjeTransversalService],
   declarations: [EjeTransversalComponent],
})
export class EjeTransversalModule { }
