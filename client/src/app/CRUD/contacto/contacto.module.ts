import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { ContactoService } from './contacto.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ContactoRoutingModule
   ],
   providers: [ContactoService],
   declarations: [ContactoComponent],
})
export class ContactoModule { }
