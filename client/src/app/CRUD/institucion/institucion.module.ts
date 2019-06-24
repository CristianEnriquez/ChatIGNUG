import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InstitucionRoutingModule } from './institucion-routing.module';
import { InstitucionComponent } from './institucion.component';
import { InstitucionService } from './institucion.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      InstitucionRoutingModule
   ],
   providers: [InstitucionService],
   declarations: [InstitucionComponent],
})
export class InstitucionModule { }
