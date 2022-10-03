import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "./models/product";
import {IPagination} from "./models/pagination";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient) {
  }
  title = 'AngularShop';
  products: IProduct[];
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe((response: IPagination)=>
    {
      this.products = response.data;
    },err=>{
      console.log(err)
    });
  }
}
