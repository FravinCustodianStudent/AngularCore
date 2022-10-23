import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from "./checkout.component";
import {CkeckoutSuccessComponent} from "./ckeckout-success/ckeckout-success.component";


const routes:Routes = [
  {path: '',component: CheckoutComponent},
  {path:'success',component:CkeckoutSuccessComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CheckoutRoutingModule { }
