import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecretariaAcademicaRoutingModule } from './secretaria-academica-routing.module';
import { SecretariaAcademicaComponent } from './secretaria-academica.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { SolicitudMatriculaService } from 'app/CRUD/solicitudmatricula/solicitudmatricula.service';
import { AsignaturaSolicitudMatriculaService } from 'app/CRUD/asignaturasolicitudmatricula/asignaturasolicitudmatricula.service';
import { GeneroService } from 'app/CRUD/genero/genero.service';
import { EtniaService } from 'app/CRUD/etnia/etnia.service';
import { TipoIngresosService } from 'app/CRUD/tipoingresos/tipoingresos.service';
import { OcupacionService } from 'app/CRUD/ocupacion/ocupacion.service';
import { TipoDiscapacidadService } from 'app/CRUD/tipodiscapacidad/tipodiscapacidad.service';
import { TipoSangreService } from 'app/CRUD/tiposangre/tiposangre.service';
import { EstadoCivilService } from 'app/CRUD/estadocivil/estadocivil.service';
import { UbicacionService } from 'app/CRUD/ubicacion/ubicacion.service';
import { NivelTituloService } from 'app/CRUD/niveltitulo/niveltitulo.service';
import { EstudianteService } from 'app/CRUD/estudiante/estudiante.service';
import { TipoInstitucionProcedenciaService } from 'app/CRUD/tipoinstitucionprocedencia/tipoinstitucionprocedencia.service';
import { PersonaService } from 'app/CRUD/persona/persona.service';
import { AsignaturaService } from 'app/CRUD/asignatura/asignatura.service';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { PeriodoLectivoService } from 'app/CRUD/periodolectivo/periodolectivo.service';
import { MatriculaService } from 'app/CRUD/matricula/matricula.service';
import { MatriculaAsignaturaService } from 'app/CRUD/matriculaasignatura/matriculaasignatura.service';
import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SecretariaAcademicaRoutingModule,
    NgxBarcodeModule,
  ],
  providers: [MatriculacionService,
    PersonaService,
    SolicitudMatriculaService,
    AsignaturaSolicitudMatriculaService,
    GeneroService,
    EtniaService,
    FotoPerfilService,
    TipoIngresosService,
    OcupacionService,
    TipoDiscapacidadService,
    TipoSangreService,
    EstadoCivilService,
    UbicacionService,
    NivelTituloService,
    EstudianteService,
    TipoInstitucionProcedenciaService,
    AsignaturaService,
    CarreraService,
    PeriodoLectivoService,
    MatriculaService,
    MatriculaAsignaturaService
    ],
  declarations: [SecretariaAcademicaComponent]
})
export class SecretariaAcademicaModule { }
