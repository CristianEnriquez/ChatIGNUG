import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificadoMatriculaComponent } from './certificado-matricula.component';

const routes: Routes = [
    { path: '', component: CertificadoMatriculaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CertificadoMatriculaRoutingModule { }
