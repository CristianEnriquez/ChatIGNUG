import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CategoriaMigratoriaRoutingModule } from './categoriamigratoria-routing.module';
import { CategoriaMigratoriaComponent } from './categoriamigratoria.component';
import { CategoriaMigratoriaService } from './categoriamigratoria.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      CategoriaMigratoriaRoutingModule
   ],
   providers: [CategoriaMigratoriaService],
   declarations: [CategoriaMigratoriaComponent],
})
export class CategoriaMigratoriaModule { }
