import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatricesComponent } from './matrices.component';

const routes: Routes = [
    { path: '', component: MatricesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatricesRoutingModule { }
