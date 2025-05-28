import { Routes } from '@angular/router';
import { UserRegisterComponentComponent } from './user-register-component/user-register-component.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { TestComponentComponent } from './test-component/test-component.component';

export const routes: Routes = [
    { path: 'register', component: UserRegisterComponentComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductListComponentComponent },
    { path: 'test', component: TestComponentComponent }
];
