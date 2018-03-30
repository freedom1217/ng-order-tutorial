import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../public_service/http.service';

@Component({
  selector: 'app-royal',
  templateUrl: './royal.component.html',
  styleUrls: ['./royal.component.css']
})
export class RoyalComponent implements OnInit {
  storeDetails;
  constructor(private http:HttpService, private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    const storeid = this.route.snapshot.params['storeid'];//抓網址列參數
    console.log(storeid);

    this.http.getData('storeDetail/' + storeid).subscribe(
      data =>{
        console.log(data);
        console.table(data);//有排版
        this.storeDetails = data;
      }
    )
  }

}
