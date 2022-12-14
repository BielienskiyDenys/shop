import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interface/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  //will work as a separate modal, that will be initiated after user has selected purchases and clicked 'go to cart'
  //TODO need some dynamic stuff like Observable, probably or event emitter from CartService
  public cartItems!: Product[];

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.reloadCart();
  }

  public reloadCart(): void {
    this.cartItems = this.cartService.cartContent;
  }

  public clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  public isCartEmpty(): boolean {
    return !(this.cartItems && this.cartItems.length>0);
  }

  public trackByProductId(index: number, product: Product): number { 
    return product.id; 
  }
}
