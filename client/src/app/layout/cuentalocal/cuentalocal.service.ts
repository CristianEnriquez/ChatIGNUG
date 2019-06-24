import { Injectable } from '@angular/core';

import { Cuenta } from '../../entidades/CRUD/Cuenta';

@Injectable()

export class CuentaLocalService {

    almacenar(cuenta:Cuenta): void {
        localStorage.setItem('cuenta', JSON.stringify(cuenta));
    }

    leer(): Cuenta {
        return JSON.parse(localStorage.getItem('cuenta')) as Cuenta;
    }
}
