import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../public_service/http.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderStore } from '../../store/order.store';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  item;//抓全部變數
  filterType;
  filterGood;
  orderForm:FormGroup;
  constructor(
    private http:HttpService, 
    private route:ActivatedRoute,
    private _formBuilder:FormBuilder,
    private orderStore: OrderStore 
  ) { }

  ngOnInit() {
    const storeid = this.route.snapshot.params['storeid'];
    console.log(storeid);//用網址列抓僅能抓到這
    const typeid = this.route.snapshot.params['typeid'];
    console.log(typeid);//下二層用typescript來抓
    const goodid = this.route.snapshot.params['goodid'];
    console.log(goodid);

    this.http.getData('storeDetail/' + storeid).subscribe(
      data =>{
        console.log(data);
        this.item = data;
        this.filterType = data['goodTypes'].filter(type => type.id == typeid)[0];//data['goodTypes']另一種指id的做法 data.goodTypes
        console.log(this.filterType);

        this.filterGood = this.filterType['goods'].filter(good => good.id == goodid)[0];
        console.log(this.filterGood);

        this.orderForm = this._formBuilder.group({
          itemName:[this.filterGood['itemName']],//泡菜牛肉鍋
          price:[this.filterGood['price']],//120
          orderNum:[0,Validators.min(1)],//訂購數量，預設0
          memo:[],//備註預設空白
          total:[0]//總數預設0
        })
      }
    )
  }

  onSubmit(){//加入點餐盤
    console.log(this.orderForm.value);
    this.orderStore.setOrderList(this.orderForm.value);
  }

  minus(){//減
    let origin_num = this.orderForm.controls['orderNum'].value;
    this.orderForm.controls['orderNum'].setValue(origin_num -1);
    this.calcSum();
  }

  add(){//加
    let origin_num = this.orderForm.controls['orderNum'].value;
    this.orderForm.controls['orderNum'].setValue(origin_num +1);
    this.calcSum()
  }

  calcSum(){//算總額
    let origin_num = this.orderForm.controls['orderNum'].value;
    let price = this.orderForm.controls['price'].value;
    this.orderForm.controls['total'].setValue(origin_num * price);
  }

}
