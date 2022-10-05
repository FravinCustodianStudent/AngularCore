import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterLink, RouterLinkActive, RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLink,
    RouterLinkActive
  ],
  exports:[NavBarComponent]
})
export class CoreModule { }
