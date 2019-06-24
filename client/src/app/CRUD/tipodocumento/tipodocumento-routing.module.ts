import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDocumentoComponent } from './tipodocumento.component';

const routes: Routes = [
   { path: '', component: TipoDocumentoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TipoDocumentoRoutingModule { }
