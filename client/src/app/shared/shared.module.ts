import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { TextInputComponent } from './components/text-input/text-input.component';
import {CdkStepperModule} from "@angular/cdk/stepper";
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import {RouterModule} from "@angular/router";
import {CurrencyMaskModule} from "ng2-currency-mask";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {TabsModule} from "ngx-bootstrap/tabs";
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,

  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CdkStepperModule,
    RouterModule,
    CurrencyMaskModule,
    NgxGalleryModule,
    TabsModule.forRoot(),
    NgxDropzoneModule,
    ImageCropperModule
  ],
  exports: [PaginationModule, PagingHeaderComponent, PagerComponent, CarouselModule, OrderTotalsComponent, ReactiveFormsModule, BsDropdownModule, TextInputComponent,
    CdkStepperModule, FormsModule, StepperComponent,BasketSummaryComponent,CurrencyMaskModule, NgxGalleryModule,TabsModule,
    NgxDropzoneModule,
    ImageCropperModule]
})
export class SharedModule { }
