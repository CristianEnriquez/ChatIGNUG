import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TipoMatriculaService} from './../../CRUD/tipomatricula/tipomatricula.service';
import {DestinoRecursosEstudianteService} from './../../CRUD/destinorecursosestudiante/destinorecursosestudiante.service';
import {AreaEmpresaTrabajaService} from './../../CRUD/areaempresatrabaja/areaempresatrabaja.service';
import {OcupacionEstudianteService} from './../../CRUD/ocupacionestudiante/ocupacionestudiante.service';
import {AlcanceProyectoVinculacionService} from './../../CRUD/alcanceproyectovinculacion/alcanceproyectovinculacion.service';
import {SectorEconomicoPracticasPreprofesionalesService} from './../../CRUD/sectoreconomicopracticaspreprofesionales/sectoreconomicopracticaspreprofesionales.service';
import {TipoInstitucionPracticasPreprofesionalesService} from './../../CRUD/tipoinstitucionpracticaspreprofesionales/tipoinstitucionpracticaspreprofesionales.service';
import {TipoBachilleratoService} from './../../CRUD/tipobachillerato/tipobachillerato.service';
import {CategoriaMigratoriaService} from './../../CRUD/categoriamigratoria/categoriamigratoria.service';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PerfilRoutingModule} from './perfil-routing.module';
import {PerfilComponent} from './perfil.component';
import {GeneroService} from 'app/CRUD/genero/genero.service';
import {EtniaService} from 'app/CRUD/etnia/etnia.service';
import {TipoIngresosService} from 'app/CRUD/tipoingresos/tipoingresos.service';
import {OcupacionService} from 'app/CRUD/ocupacion/ocupacion.service';
import {TipoDiscapacidadService} from 'app/CRUD/tipodiscapacidad/tipodiscapacidad.service';
import {TipoSangreService} from 'app/CRUD/tiposangre/tiposangre.service';
import {EstadoCivilService} from 'app/CRUD/estadocivil/estadocivil.service';
import {TituloService} from 'app/CRUD/titulo/titulo.service';
import {EstudianteService} from 'app/CRUD/estudiante/estudiante.service';
import {TipoInstitucionProcedenciaService} from 'app/CRUD/tipoinstitucionprocedencia/tipoinstitucionprocedencia.service';
import {NivelTituloService} from 'app/CRUD/niveltitulo/niveltitulo.service';
import {UbicacionService} from 'app/CRUD/ubicacion/ubicacion.service';
import {FotoPerfilService} from 'app/CRUD/fotoperfil/fotoperfil.service';
import {TipoDocumentoService} from '../../CRUD/tipodocumento/tipodocumento.service';
import {CupoService} from '../../CRUD/cupo/cupo.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PerfilRoutingModule,
        NgbModule,
    ],
    providers: [GeneroService,
        EtniaService,
        TipoIngresosService,
        OcupacionService,
        TipoDiscapacidadService,
        TipoSangreService,
        EstadoCivilService,
        TituloService,
        EstudianteService,
        AlcanceProyectoVinculacionService,
        TipoBachilleratoService,
        TipoDocumentoService,
        TipoMatriculaService,
        CupoService,
        OcupacionEstudianteService,
        AreaEmpresaTrabajaService,
        DestinoRecursosEstudianteService,
        TipoInstitucionPracticasPreprofesionalesService,
        SectorEconomicoPracticasPreprofesionalesService,
        CategoriaMigratoriaService,
        TipoInstitucionProcedenciaService,
        NivelTituloService,
        FotoPerfilService,
        UbicacionService],
    declarations: [PerfilComponent]
})
export class PerfilModule {
}
