import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';
import { EditProductPhotosComponent } from './edit-product-photos/edit-product-photos.component';
import { PhotoWidgetComponent } from './photo-widget/photo-widget.component';



@NgModule({
  declarations: [
    AdminComponent,
    EditProductComponent,
    EditProductFormComponent,
    EditProductPhotosComponent,
    PhotoWidgetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
