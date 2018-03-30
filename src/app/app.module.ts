import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { PageComponent } from './component/page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { RoyalComponent } from './component/royal/royal.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { CertComponent } from './component/cert/cert.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClient } from 'selenium-webdriver/http';

import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './public_service/http.service';

import {ReactiveFormsModule} from '@angular/forms';//用於mdf
import { OrderStore } from './store/order.store';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageComponent,
    RoyalComponent,
    OrderDetailComponent,
    CertComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //httpService用；上面引用
    ReactiveFormsModule //引用後得用；不然程式不會動
  ],
  providers: [
    HttpService, //自己寫的注入在這裡
    OrderStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
