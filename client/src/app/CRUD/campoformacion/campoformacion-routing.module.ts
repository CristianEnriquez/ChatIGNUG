import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampoFormacionComponent } from './campoformacion.component';

const routes: Routes = [
   { path: '', component: CampoFormacionComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CampoFormacionRoutingModule { }
