export class Persona {
    id: number;
    identificacion: string;
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    fechaNacimiento: Date;
    telefonoCelular: string;
    telefonoDomicilio: string;
    correoElectronicoInstitucional: string;
    correoElectronicoPersonal: string;
    idGenero: number;
    idUbicacionDomicilioPais: string;
    idUbicacionDomicilioProvincia: string;
    idUbicacionDomicilioCanton: string;
    idUbicacionDomicilioParroquia: string;
    direccionDomicilio: string;
    idEstadoCivil: number;
    idUbicacionNacimientoPais: string;
    idUbicacionNacimientoProvincia: string;
    idUbicacionNacimientoCanton: string;
    idUbicacionNacimientoParroquia: string;
    idIngresos: number;
    idEtnia: number;
    idTipoSangre: number;
    numeroHijos: number;
    idOcupacion: number;
    carnetConadis: string;
    idTipoDiscapacidad: number;
    porcentajeDiscapacidad: number;
    nombrePadre: string;
    paisOrigenPadre: number;
    idNivelEstudioPadre: number;
    nombreMadre: string;
    paisOrigenMadre: number;
    idNivelEstudioMadre: number;
    codigoPostal: string;
    telefonoContactoEmergencia: string;
    idOcupacionEstudiante: number;
    idDestinoRecursosEstudiante: number;
    bonoDesarrolloHumano: string;
    numeroCarnetConadis: string;
    miembrosHogar: number;
    nombreContactoEmergencia: string;
    parentescoContactoEmergencia: string;
    hablaIdiomaAncestral: string;
    idiomaAncestral: string;
    etniaEspecifica: string;
    idTipoDocumento: number;
    idCategoriaMigratoria: number;

    constructor() {
        this.idiomaAncestral = '';
    }
}
