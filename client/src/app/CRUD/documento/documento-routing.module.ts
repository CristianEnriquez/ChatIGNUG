import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentoComponent } from './documento.component';

const routes: Routes = [
   { path: '', component: DocumentoComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DocumentoRoutingModule { }
