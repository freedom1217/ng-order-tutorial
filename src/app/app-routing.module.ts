import { CertComponent } from './component/cert/cert.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { RoyalComponent } from './component/royal/royal.component';
import { IndexComponent } from './component/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './component/page/page.component';

const routes: Routes = [
    { path: '', redirectTo: 'page', pathMatch: 'full' },
    {
        path: 'page', component: PageComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent },//首頁
            { path: 'royal', component: RoyalComponent },//餐廳detail
            { path: 'royal/:storeid', component: RoyalComponent },//餐廳detail區分店家
            { path: 'order-detail', component: OrderDetailComponent },//菜單訂購detail
            { path: 'order-detail/:storeid/:typeid/:goodid', component: OrderDetailComponent },//菜單訂購detail
            //店/餐類/菜類
            { path: 'cert', component: CertComponent }//購物車
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }