import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import {CheckoutRoutingModule} from "./checkout-routing.module";
import {SharedModule} from "../shared/shared.module";
import { CkeckoutAddressComponent } from './ckeckout-address/ckeckout-address.component';
import { CkeckoutDeliveryComponent } from './ckeckout-delivery/ckeckout-delivery.component';
import { CkeckoutReviewComponent } from './ckeckout-review/ckeckout-review.component';
import { CkeckoutPaymentComponent } from './ckeckout-payment/ckeckout-payment.component';
import { CkeckoutSuccessComponent } from './ckeckout-success/ckeckout-success.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    CkeckoutAddressComponent,
    CkeckoutDeliveryComponent,
    CkeckoutReviewComponent,
    CkeckoutPaymentComponent,
    CkeckoutSuccessComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
