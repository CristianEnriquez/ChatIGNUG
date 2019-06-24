import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretariaAcademicaComponent } from './secretaria-academica.component';

const routes: Routes = [
    { path: '', component: SecretariaAcademicaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretariaAcademicaRoutingModule { }
