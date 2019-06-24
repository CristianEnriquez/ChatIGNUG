import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgxBarcodeModule } from 'ngx-barcode';
import { CertificadoMatriculaRoutingModule } from './certificado-matricula-routing.module';
import { CertificadoMatriculaComponent } from './certificado-matricula.component';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { PersonaService } from 'app/CRUD/persona/persona.service';
import { SolicitudMatriculaService } from 'app/CRUD/solicitudmatricula/solicitudmatricula.service';
import { AsignaturaSolicitudMatriculaService } from 'app/CRUD/asignaturasolicitudmatricula/asignaturasolicitudmatricula.service';
import { PeriodoLectivoService } from 'app/CRUD/periodolectivo/periodolectivo.service';
import { AsignaturaService } from 'app/CRUD/asignatura/asignatura.service';
import { MatriculaService } from 'app/CRUD/matricula/matricula.service';
import { MatriculaAsignaturaService } from 'app/CRUD/matriculaasignatura/matriculaasignatura.service';
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
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { JornadaService } from 'app/CRUD/jornada/jornada.service';
import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';

@NgModule({
  imports: [
    CommonModule,
    NgxBarcodeModule,
    NgbModule,
    FormsModule,
    CertificadoMatriculaRoutingModule
  ],
  providers: [MatriculacionService,
    PersonaService,
    SolicitudMatriculaService,
    AsignaturaSolicitudMatriculaService,
    GeneroService,
    FotoPerfilService,
    EtniaService,
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
    MatriculaAsignaturaService,
    JornadaService
  ],
  declarations: [CertificadoMatriculaComponent]
})
export class CertificadoMatriculaModule { }
