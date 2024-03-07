import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BlankComponent } from './components/blank/blank.component';
import { AuthComponent } from './components/auth/auth.component';
import { BlankNavComponent } from './components/blank-nav/blank-nav.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpecificProductComponent } from './components/specific-product/specific-product.component';
import { SearchPipePipe } from './shared/pipes/search-pipe.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    BlankNavComponent,
    AuthNavComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    WishListComponent,
    CategoriesComponent,
    BrandsComponent,
    RegisterComponent,
    LoginComponent,
    BlankComponent,
    AuthComponent,
    BlankNavComponent,
    AuthNavComponent,
    NotFoundComponent,
    SpecificProductComponent,
    SearchPipePipe,
    CheckoutComponent,
    AllordersComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
