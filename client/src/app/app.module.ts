import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./home/home.module";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import { NgxSpinnerModule} from "ngx-spinner";
import {LoadingInterceptor} from "./core/interceptors/loading.interceptor";
import {CheckoutModule} from "./checkout/checkout.module";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {OrdersModule} from "./orders/orders.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    NgxSpinnerModule,
    CheckoutModule,
    OrdersModule,
    CdkStepperModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
  ],
  exports:[NgxSpinnerModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
