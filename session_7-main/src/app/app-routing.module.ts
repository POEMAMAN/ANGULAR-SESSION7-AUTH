import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { ProductsComponent } from './products/products.component';
import { verifyTokenGuard } from './auth/verify-token.guard';

const routes: Routes = [
{
  path: 'register', component: RegisterPageComponent,
},
{
  path: 'login', component: LoginPageComponent,
},
{
  path: 'products', canActivate: [verifyTokenGuard],  component: ProductsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
