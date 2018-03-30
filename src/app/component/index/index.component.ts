import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../public_service/http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  stores:any;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getData('goods').subscribe(
      data =>{
        console.log(data);
        this.stores = data;
      }
    )
  }

}
