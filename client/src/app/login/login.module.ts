import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { RolSecundarioService } from 'app/CRUD/rolsecundario/rolsecundario.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers: [LoginService,
    RolSecundarioService]
})
export class LoginModule {
}
