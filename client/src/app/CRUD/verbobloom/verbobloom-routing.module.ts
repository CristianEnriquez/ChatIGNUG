import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerboBloomComponent } from './verbobloom.component';

const routes: Routes = [
   { path: '', component: VerboBloomComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class VerboBloomRoutingModule { }
