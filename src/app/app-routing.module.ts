import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpecificProductComponent } from './components/specific-product/specific-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  {path:'', canActivate:[authGuardGuard],component:BlankComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'cart',component:CartComponent,title:'Cart'},
    {path:'details/:id',component:SpecificProductComponent ,title:'Product Details'},
    {path:'wishlist',component:WishListComponent ,title:'Wish List'},
    {path:'products',component:ProductsComponent ,title:'Products'},
    {path:'categories',component:CategoriesComponent ,title:'Catergories'},
    {path:'brands',component:BrandsComponent ,title:'Brands'},
    {path:'checkout/:id',component:CheckoutComponent,title:'checkout'},
    {path:'allorders',component:AllordersComponent,title:'all Order'},
    
  ]},

  {path:'',component:AuthComponent,children:[
    {path:'register',component:RegisterComponent ,title:'Register'},
    {path:'login',component:LoginComponent ,title:'Login'},
    {path:'forgetPassword',component:ForgetPasswordComponent,title:'forget Password'}
  ]},

  {path:'**', component:NotFoundComponent ,title:'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
