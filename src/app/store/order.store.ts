//交易結果存在這裡； service結構

import { Injectable } from '@angular/core';


@Injectable()
export class OrderStore {
 
  //要記錄買什麼東西
  orderList: object[] = [];
  constructor() { }

  get getOrderList(){
    return this.orderList;
  }

  setOrderList(order:any){
    this.orderList.push(order);
  }

}
