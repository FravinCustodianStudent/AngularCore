import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Basket, IBasket} from "../../shared/models/basket";
import {BasketService} from "../../basket/basket.service";
import {Observable} from "rxjs";
import {IUser} from "../../shared/models/user";
import {AccountService} from "../../account/account.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$:Observable<IBasket>;
  currentUser$:Observable<IUser>;
  isAdmin$: Observable<boolean>;
  constructor(private basketService:BasketService,private accountService:AccountService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
    this.isAdmin$ = this.accountService.isAdmin$;
  }
  logout(){
    this.accountService.logout();
  }

}
