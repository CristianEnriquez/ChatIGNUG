import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAsistenciaComponent } from './registro-asistencia.component';

const routes: Routes = [
    { path: '', component: RegistroAsistenciaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistroAsistenciaRoutingModule { }
