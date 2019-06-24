import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { HobbiesComponent } from './hobbies.component';
import { HobbiesService } from './hobbies.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      HobbiesRoutingModule
   ],
   providers: [HobbiesService],
   declarations: [HobbiesComponent],
})
export class HobbiesModule { }
