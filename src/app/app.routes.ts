import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProductSearchComponent } from './product-search/product-search.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: RegistrationFormComponent, children: [] },
    { path: 'product', component: ProductSearchComponent}
];
