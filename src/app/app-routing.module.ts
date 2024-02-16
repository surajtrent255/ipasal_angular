import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PractiseComponent } from './components/practise/practise.component';
import { AboutComponent } from './components/shared/homeComponents/about/about.component';
import { CarouselComponent } from './components/shared/homeComponents/carousel/carousel.component';
import { CartComponent } from './components/shared/homeComponents/cart/cart.component';
import { CheckoutComponent } from './components/shared/homeComponents/checkout/checkout.component';
import { ContactComponent } from './components/shared/homeComponents/contact/contact.component';
import { FeaturedProductsCategoriesComponent } from './components/shared/homeComponents/featured-products-categories/featured-products-categories.component';
import { FeaturedProductsComponent } from './components/shared/homeComponents/featured-products/featured-products.component';
import { HomeComponent } from './components/shared/homeComponents/home/home.component';
import { FinishComponent } from './components/shared/homeComponents/payment-flow/finish/finish.component';
import { PaymentFlowComponent } from './components/shared/homeComponents/payment-flow/payment-flow.component';
import { PersonalInfoComponent } from './components/shared/homeComponents/payment-flow/personal-info/personal-info.component';
import { ShippingComponent } from './components/shared/homeComponents/payment-flow/shipping/shipping.component';

import { ProductsComponent } from './components/shared/homeComponents/products/products.component';
import { RecentProductsComponent } from './components/shared/homeComponents/recent-products/recent-products.component';
import { ShopDetailsComponent } from './components/shared/homeComponents/shop-details/shop-details.component';
import { ShopListComponent } from './components/shared/homeComponents/shop-list/shop-list.component';
import { LoginComponent } from './components/shared/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },

  { path: 'practise', component: PaymentFlowComponent },

  {
    path: 'checkout', component: PaymentFlowComponent
  },
  {
    path: 'paymentSuccedUrl', component: FinishComponent,
  },
  {
    path: 'category',
    component: FeaturedProductsCategoriesComponent,
  },
  {
    path: 'contact/.',
    component: ContactComponent,
    //   children: [
    //     {
    //       path: "",
    //       component: ContactComponent
    //     }
    //   ]
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'banner',
    component: CarouselComponent,
  },
  {
    path: 'details/:productId',
    component: ShopDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: PaymentFlowComponent,
  },
  {
    path: 'shoplist',
    component: ShopListComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'recent',
    component: RecentProductsComponent,
  },
  {
    path: 'featured',
    component: FeaturedProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    initialNavigation: 'enabledNonBlocking',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
