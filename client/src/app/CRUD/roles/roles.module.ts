import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RolesService } from './roles.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RolesRoutingModule
   ],
   providers: [RolesService],
   declarations: [RolesComponent],
})
export class RolesModule { }
