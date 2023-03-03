import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorisComponent } from './pages/categoris/categoris.component';
import { LoginComponent } from './pages/login/login.component';
import { CatDetailsComponent } from './pages/cat-details/cat-details.component';
import { ProdDetailsComponent } from './pages/prod-details/prod-details.component';
import { ClientRegisterComponent } from './pages/client-register/client-register.component';
import { AllClientsComponent } from './pages/all-clients/all-clients.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrdersDetailsComponent } from './pages/orders-details/orders-details.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { PackegsComponent } from './pages/packegs/packegs.component';
import { PackegDetailsComponent } from './pages/packeg-details/packeg-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: ClientRegisterComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'categoris',
        component: CategorisComponent,
      },
      {
        path: 'categroy_details/:id',
        component: CatDetailsComponent
      },
      {
        path: 'product_details/:id',
        component: ProdDetailsComponent
      },
      {
        path: 'all_clients',
        component: AllClientsComponent
      },
      {
        path: 'client_details/:id',
        component: ClientDetailsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'order_details/:id',
        component: OrdersDetailsComponent
      },
      {
        path: 'packges',
        component: PackegsComponent
      },
      {
        path: 'packges_details/:id',
        component: PackegDetailsComponent
      },
    ]
  },

 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
