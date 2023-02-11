import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CategorisComponent } from './pages/categoris/categoris.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CatDetailsComponent } from './pages/cat-details/cat-details.component';
import { ProdDetailsComponent } from './pages/prod-details/prod-details.component';
import { ClientRegisterComponent } from './pages/client-register/client-register.component';
import { AllClientsComponent } from './pages/all-clients/all-clients.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrdersDetailsComponent } from './pages/orders-details/orders-details.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { MainComponent } from './pages/main/main.component';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategorisComponent,
    LoginComponent,
    CatDetailsComponent,
    ProdDetailsComponent,
    ClientRegisterComponent,
    AllClientsComponent,
    ClientDetailsComponent,
    OrdersComponent,
    OrdersDetailsComponent,
    SideBarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    ToastrModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
