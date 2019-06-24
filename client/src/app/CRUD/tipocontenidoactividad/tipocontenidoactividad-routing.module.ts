import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoContenidoActividadComponent } from './tipocontenidoactividad.component';

const routes: Routes = [
   { path: '', component: TipoContenidoActividadComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoContenidoActividadRoutingModule { }
