import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HomeComponent } from './components/shared/homeComponents/home/home.component';
import { NavComponent } from './components/shared/homeComponents/nav/nav.component';
import { FooterComponent } from './components/shared/homeComponents/footer/footer.component';
import { TopBarComponent } from './components/shared/homeComponents/top-bar/top-bar.component';
import { CarouselComponent } from './components/shared/homeComponents/carousel/carousel.component';
import { FeaturedProductsComponent } from './components/shared/homeComponents/featured-products/featured-products.component';
import { ProductsComponent } from './components/shared/homeComponents/products/products.component';
import { VendorComponent } from './components/shared/homeComponents/vendor/vendor.component';
import { PractiseComponent } from './components/practise/practise.component';
import { MatButtonModule } from '@angular/material/button';
import { FeaturedProductsCategoriesComponent } from './components/shared/homeComponents/featured-products-categories/featured-products-categories.component';

import { ContactComponent } from './components/shared/homeComponents/contact/contact.component';
import { AboutComponent } from './components/shared/homeComponents/about/about.component';

import { ShopDetailsComponent } from './components/shared/homeComponents/shop-details/shop-details.component';
import { CartComponent } from './components/shared/homeComponents/cart/cart.component';
import { CheckoutComponent } from './components/shared/homeComponents/checkout/checkout.component';
import { ShopListComponent } from './components/shared/homeComponents/shop-list/shop-list.component';
import { PaymentFlowComponent } from './components/shared/homeComponents/payment-flow/payment-flow.component';
import { PersonalInfoComponent } from './components/shared/homeComponents/payment-flow/personal-info/personal-info.component';
import { ShippingComponent } from './components/shared/homeComponents/payment-flow/shipping/shipping.component';
import { RecentProductsComponent } from './components/shared/homeComponents/recent-products/recent-products.component';
import { MostBoughtProductComponent } from './components/shared/homeComponents/most-bought-product/most-bought-product.component';
import { DeliveryComponent } from './components/shared/homeComponents/payment-flow/delivery/delivery.component';
import { PaymentComponent } from './components/shared/homeComponents/payment-flow/payment/payment.component';
import { FinishComponent } from './components/shared/homeComponents/payment-flow/finish/finish.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    TopBarComponent,
    CarouselComponent,
    FeaturedProductsComponent,
    ProductsComponent,
    VendorComponent,
    PractiseComponent,
    FeaturedProductsCategoriesComponent,
    ContactComponent,
    AboutComponent,
    CartComponent,
    CheckoutComponent,
    ShopDetailsComponent,
    ShopListComponent,
    PaymentFlowComponent,
    PersonalInfoComponent,
    ShippingComponent,
    RecentProductsComponent,
    MostBoughtProductComponent,
    DeliveryComponent,
    PaymentComponent,
    FinishComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
    MatButtonModule,
    NgxPayPalModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
