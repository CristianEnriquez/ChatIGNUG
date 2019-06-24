import { EstudianteService } from '../../../CRUD/estudiante/estudiante.service';
import { NivelTituloService } from '../../../CRUD/niveltitulo/niveltitulo.service';
import { UbicacionService } from '../../../CRUD/ubicacion/ubicacion.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HojaDatosRoutingModule } from './hoja-datos-routing.module';
import { HojaDatosComponent } from './hoja-datos.component';

import { GeneroService } from 'app/CRUD/genero/genero.service';
import { EtniaService } from 'app/CRUD/etnia/etnia.service';
import { TipoIngresosService } from 'app/CRUD/tipoingresos/tipoingresos.service';
import { OcupacionService } from 'app/CRUD/ocupacion/ocupacion.service';
import { TipoDiscapacidadService } from '../../../CRUD/tipodiscapacidad/tipodiscapacidad.service';
import { TipoSangreService } from '../../../CRUD/tiposangre/tiposangre.service';
import { EstadoCivilService } from '../../../CRUD/estadocivil/estadocivil.service';
import { TipoInstitucionProcedenciaService } from 'app/CRUD/tipoinstitucionprocedencia/tipoinstitucionprocedencia.service';
import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';

@NgModule({
  imports: [
    CommonModule,
    HojaDatosRoutingModule
  ],
  providers: [GeneroService,
    EtniaService,
    TipoIngresosService,
    OcupacionService,
    TipoDiscapacidadService,
    TipoSangreService,
    EstadoCivilService,
    FotoPerfilService,
    UbicacionService,
    NivelTituloService,
    EstudianteService,
    TipoInstitucionProcedenciaService],
  declarations: [HojaDatosComponent]
})
export class HojaDatosModule { }
