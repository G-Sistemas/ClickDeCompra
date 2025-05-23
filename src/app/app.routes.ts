import { Routes } from '@angular/router';
import { UserRegisterComponentComponent } from './user-register-component/user-register-component.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'register', component: UserRegisterComponentComponent },
    { path: 'login', component: LoginComponent }
];
