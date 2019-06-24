import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioDatosComponent } from './formulario-datos.component';

const routes: Routes = [
    { path: '', component: FormularioDatosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormularioDatosRoutingModule { }
