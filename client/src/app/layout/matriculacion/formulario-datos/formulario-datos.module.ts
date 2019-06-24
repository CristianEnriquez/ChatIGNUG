import { CupoService } from './../../../CRUD/cupo/cupo.service';
import { EstudianteService } from 'app/CRUD/estudiante/estudiante.service';
import { EtniaService } from 'app/CRUD/etnia/etnia.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeModule } from 'ngx-barcode';
import { MatriculacionService } from './../matriculacion.service';
import { FormularioDatosRoutingModule } from './formulario-datos-routing.module';
import { FormularioDatosComponent } from './formulario-datos.component';
import { TipoSangreService } from '../../../CRUD/tiposangre/tiposangre.service';
import { UbicacionService } from '../../../CRUD/ubicacion/ubicacion.service';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { TipoIngresosService } from 'app/CRUD/tipoingresos/tipoingresos.service';
import { PeriodoLectivoService } from '../../../CRUD/periodolectivo/periodolectivo.service';


@NgModule({
  imports: [
    CommonModule,
    NgxBarcodeModule,
    FormularioDatosRoutingModule
  ],
  declarations: [FormularioDatosComponent],
  providers: [MatriculacionService,
              TipoSangreService,
              UbicacionService,
              PeriodoLectivoService,
              CarreraService,
              TipoIngresosService,
              CupoService,
              EstudianteService,
              EtniaService]
})
export class FormularioDatosModule { }
