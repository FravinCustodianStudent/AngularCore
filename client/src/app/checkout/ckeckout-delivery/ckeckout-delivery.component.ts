import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CheckoutService} from "../checkout.service";
import {IDeliveryMethod} from "../../shared/models/deliveryMethod";
import {BasketService} from "../../basket/basket.service";

@Component({
  selector: 'app-ckeckout-delivery',
  templateUrl: './ckeckout-delivery.component.html',
  styleUrls: ['./ckeckout-delivery.component.scss']
})
export class CkeckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm:FormGroup;
  deliveryMethods: IDeliveryMethod[];
  constructor(private checkoutService:CheckoutService,private basketService:BasketService) { }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethod().subscribe((dm:IDeliveryMethod[])=>{
      this.deliveryMethods = dm;
    },error => {
      console.log(error);
    })
  }
  setShippingPrice(deliveryMethod: IDeliveryMethod){
    this.basketService.setShippingPrice(deliveryMethod);
  }
}
