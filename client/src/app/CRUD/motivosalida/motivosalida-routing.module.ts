import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotivoSalidaComponent } from './motivosalida.component';

const routes: Routes = [
   { path: '', component: MotivoSalidaComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class MotivoSalidaRoutingModule { }
