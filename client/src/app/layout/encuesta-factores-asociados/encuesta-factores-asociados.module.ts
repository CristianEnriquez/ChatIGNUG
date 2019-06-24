import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestaFactoresAsociadosRoutingModule } from './encuesta-factores-asociados-routing.module';
import { EncuestaFactoresAsociadosComponent } from './encuesta-factores-asociados.component';

@NgModule({
  imports: [
    CommonModule,
    EncuestaFactoresAsociadosRoutingModule
  ],
  declarations: [EncuestaFactoresAsociadosComponent]
})
export class EncuestaFactoresAsociadosModule { }
