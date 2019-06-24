export class Estudiante {
    id: number;
    idPersona: number;
    notaPostulacion: number;
    tituloBachiller: string;
    idTipoInstitucionProcedencia: number;
    idTipoBachillerato: number;
    poseeTituloEducacionSuperior: string;
    tituloEducacionSuperior: string;
    anoGraduacion: number;
    fechaInicioCarrrera: Date;
    realizadoPracticasPreprofesionales: string;
    horasPracticasPreprofesionales: number;
    idTipoInstitucionPracticasPreprofesionales: number;
    idSectorEconomicoPracticasPreprofesionales: number;
    participadoProyectoVinculacion: string;
    idAlcanceProyectoVinculacion: number;
    nombreEmpresaTrabaja: string;
    idAreaEmpresaTrabaja: number;
    repetidoMateria: string;
    perdidoGratuidad: string;
    idOcupacionEstudiante: number;
    idDestinoRecursosEstudiante: number;

    constructor() {
        this.nombreEmpresaTrabaja = '';
    }
}
