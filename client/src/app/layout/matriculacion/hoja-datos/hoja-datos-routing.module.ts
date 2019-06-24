import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojaDatosComponent } from './hoja-datos.component';

const routes: Routes = [
    { path: '', component: HojaDatosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HojaDatosRoutingModule { }
